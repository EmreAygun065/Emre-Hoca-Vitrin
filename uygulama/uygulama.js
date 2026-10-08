// Emre Hoca LGS Akademi · etkileşimli soru çözme uygulaması.
// Sorular veri/*.json içinde AES-GCM ile şifrelidir. Erişim kodundan PBKDF2 ile bir kimlik ve bir anahtar türetilir;
// kimlik veri/kodlar.json'da aranır, bulunan kayıt o kodun açtığı paketlerin içerik anahtarlarını (şifreli) taşır.
// Türetme ayarları benim-projem/urun/erisim/erisim.cjs ile aynıdır. İlerleme yalnızca bu cihazda (localStorage) tutulur.
(function () {
  const uyg = document.getElementById('uyg');
  const HARF = 'ABCD';
  const ZORLUKLAR = ['Kolay', 'Orta', 'Zor', 'Çok zor'];
  const depo = {
    al(k, v) { try { const x = JSON.parse(localStorage.getItem(k)); return x === null ? v : x; } catch (e) { return v; } },
    yaz(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const kacis = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Tema
  const kok = document.documentElement;
  document.getElementById('tema').onclick = () => {
    const koyu = kok.dataset.theme ? kok.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    kok.dataset.theme = koyu ? 'light' : 'dark';
    depo.yaz('tema', kok.dataset.theme);
  };

  // ---------- Erişim ve şifre çözme ----------
  const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const normal = kod => String(kod).toUpperCase().replace(/[^0-9A-Z]/g, '');
  const bicimle = n => `${n.slice(0, 2)}-${n.slice(2, 6)}-${n.slice(6, 10)}`;
  const getir = async ad => { const r = await fetch(`veri/${ad}.json`, { cache: 'no-cache' }); if (!r.ok) throw new Error('veri'); return r.json(); };
  let DIZIN = null, KATALOG = null;
  const ANAHTAR = {}, PAKET = {};

  async function turet(kod) {
    const temel = await crypto.subtle.importKey('raw', new TextEncoder().encode(normal(kod)), 'PBKDF2', false, ['deriveBits']);
    const bit = new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: new TextEncoder().encode(DIZIN.tuz), iterations: DIZIN.tekrar, hash: 'SHA-256' }, temel, 384));
    const kimlik = [...bit.slice(0, 16)].map(b => b.toString(16).padStart(2, '0')).join('');
    const sarma = await crypto.subtle.importKey('raw', bit.slice(16, 48), 'AES-GCM', false, ['decrypt']);
    return { kimlik, sarma };
  }

  // Kodun açtığı paketlerin anahtarlarını çözer; kod geçersiz ya da iptal edilmişse boş döner.
  async function koduAc(kod) {
    const { kimlik, sarma } = await turet(kod);
    const kayit = DIZIN.kodlar[kimlik];
    if (!kayit) return [];
    const acilan = [];
    for (const [p, { iv, k }] of Object.entries(kayit)) {
      const ham = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(iv) }, sarma, b64(k));
      ANAHTAR[p] = await crypto.subtle.importKey('raw', ham, 'AES-GCM', false, ['decrypt']);
      acilan.push(p);
    }
    return acilan;
  }

  async function paketYukle(p) {
    if (PAKET[p]) return PAKET[p];
    const { iv, ct } = await getir(p);
    const duz = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(iv) }, ANAHTAR[p], b64(ct));
    PAKET[p] = JSON.parse(new TextDecoder().decode(duz));
    return PAKET[p];
  }

  // Bu cihazda kayıtlı kodlarla oturumu açar; iptal edilmiş kodları listeden düşürür.
  async function oturumAc() {
    [DIZIN, KATALOG] = await Promise.all([getir('kodlar'), getir('katalog')]);
    const kodlar = depo.al('eh-kodlar', []), gecerli = [];
    for (const k of kodlar) if ((await koduAc(k)).length) gecerli.push(k);
    if (gecerli.length !== kodlar.length) depo.yaz('eh-kodlar', gecerli);
    return kodlar.length - gecerli.length;
  }

  // ---------- İlerleme (bu cihazda) ----------
  // İlerleme üniteye göre tutulur: Yarış paketinden Tam pakete yükselten öğrencinin çözdükleri korunur
  // (soru numaraları iki pakette aynıdır).
  const uniteOf = p => (KATALOG && KATALOG[p] && KATALOG[p].unite) || String(p).replace(/-yaris$/, '');
  const ilerleme = p => depo.al('eh-ilerleme', {})[uniteOf(p)] || {};
  function kaydet(p, no, dogru) {
    const t = depo.al('eh-ilerleme', {}), u = uniteOf(p);
    const x = ((t[u] = t[u] || {})[no] = t[u][no] || { d: 0, y: 0 });
    dogru ? x.d++ : x.y++;
    x.son = dogru ? 'd' : 'y';
    depo.yaz('eh-ilerleme', t);
  }
  function ozet(p, sorular) {
    const il = ilerleme(p);
    const cozulen = sorular.filter(q => il[q.no]);
    const dogru = cozulen.filter(q => il[q.no].son === 'd').length;
    return { cozulen: cozulen.length, dogru, yanlis: cozulen.length - dogru, oran: cozulen.length ? Math.round(dogru / cozulen.length * 100) : 0 };
  }

  // ---------- Görünüm yardımcıları ----------
  const etiketler = (q, P) => `<span class="tag">${q.konu}</span><span class="tag" title="${kacis((P.kazanimlar[q.kazanim] || {}).metin || '')}">${q.kazanim}</span><span class="tag zorluk" data-z="${q.zorluk}">${q.zorluk}</span>`;
  const soruBas = (q, n, P) => `<div class="qhead"><span class="qno">${n}</span>${etiketler(q, P)}</div><div class="qtext">${q.q}</div>`;
  const cozumHTML = q => `<ol class="steps">${q.steps.map(s => `<li>${s}</li>`).join('')}</ol><div class="answer">${q.answer}</div>${q.trap ? `<div class="trap">${q.trap}</div>` : ''}`
    + `<details class="celdiriciler" open><summary>Çeldirici analizi</summary><ul>${Object.entries(q.celdirici).map(([j, t]) => `<li><b>${HARF[j]})</b> ${/<svg/.test(q.opts[j]) ? "" : q.opts[j] + " — "}${t}</li>`).join('')}</ul></details>`;
  const cubuk = (oran, kirmizi) => `<div class="cubuk ${kirmizi ? 'kirmizi' : ''}"><span style="width:${oran}%"></span></div>`;
  // Basamaklar: Isın (kazanımı öğreten temel sorular), Güçlen (pekiştirme), Yarış (LGS tarzı yeni nesil)
  const TURLER = [['isin', 'Isın', 'Kazanımı öğreten temel sorular'], ['guclen', 'Güçlen', 'Pekiştirme soruları'], ['yaris', 'Yarış', 'LGS tarzı yeni nesil sorular']];
  const turOf = q => q.tur || (q.zorluk === 'Kolay' ? 'isin' : q.zorluk === 'Orta' ? 'guclen' : 'yaris');
  const turAdi = t => (TURLER.find(x => x[0] === t) || [, t])[1];
  const BLOK = 20; // bir testteki soru sayısı (yaklaşık)
  // Soruları ~20'lik testlere eşit dağıt: 123 soru → 6 test (20–21), 217 → 11 test (19–20)
  const bloklar = qs => { const k = Math.max(1, Math.round(qs.length / BLOK)); return Array.from({ length: k }, (_, i) => qs.slice(Math.floor(i * qs.length / k), Math.floor((i + 1) * qs.length / k))); };
  // Filtre adları: tum | isin | guclen | yaris | k~<kazanım> | yanlis | cozulmemis | <zorluk>
  // Test filtreleri ayrıca 20'lik blok taşır: isin~2 (Isın 2. test), karma (rastgele 20), k~M.8.1.2.1 (kazanımdan rastgele 20)
  const filtreAdi = (f, P) => {
    const [a, b] = f.split('~');
    if (a === 'tum') return 'Tüm sorular';
    if (a === 'yanlis') return 'Yanlışlarım';
    if (a === 'cozulmemis') return 'Çözülmemişler';
    if (a === 'karma') return 'Karma test';
    if (a === 'k') return P && P.kazanimlar[b] ? P.kazanimlar[b].konu : b;
    if (TURLER.some(t => t[0] === a)) return turAdi(a) + (b ? ` · Test ${b}` : '');
    return a;
  };
  function filtrele(P, p, f) {
    const [a, b] = f.split('~'), il = ilerleme(p);
    if (a === 'yanlis') return P.sorular.filter(q => il[q.no] && il[q.no].son === 'y');
    if (a === 'cozulmemis') return P.sorular.filter(q => !il[q.no]);
    if (a === 'tum' || a === 'karma') return P.sorular;
    if (a === 'k') return P.sorular.filter(q => q.kazanim === b);
    if (TURLER.some(t => t[0] === a)) return P.sorular.filter(q => turOf(q) === a);
    return P.sorular.filter(q => q.zorluk === a);
  }
  // Rastgele seçim: önce hiç çözülmemiş, sonra yanlış yapılmış, en son doğru yapılmış sorular
  function rastgeleSec(p, sorular, n) {
    const il = ilerleme(p), puan = q => !il[q.no] ? 0 : il[q.no].son === 'y' ? 1 : 2;
    return sorular.map(q => [puan(q), Math.random(), q]).sort((x, y) => x[0] - y[0] || x[1] - y[1]).slice(0, n).map(x => x[2]);
  }
  function testListesi(P, p, f) {
    const [a, b] = f.split('~');
    if (a === 'karma') { // basamakların oranını koruyarak 20 soru
      const pay = { isin: 4, guclen: 8, yaris: 8 };
      return TURLER.flatMap(([t]) => rastgeleSec(p, P.sorular.filter(q => turOf(q) === t), pay[t])).sort(() => Math.random() - .5);
    }
    if (a === 'k') return rastgeleSec(p, filtrele(P, p, f), BLOK);
    if (a === 'yanlis') return filtrele(P, p, f).slice(0, BLOK);
    if (b) return bloklar(filtrele(P, p, a))[+b - 1] || [];
    return filtrele(P, p, f);
  }
  const yukleniyor = (m = 'Yükleniyor…') => { uyg.innerHTML = `<p class="yukleniyor">${m}</p>`; };

  // ---------- Ekranlar ----------
  function kodEkrani(ek) {
    uyg.innerHTML = `<div class="dar">
      ${ek ? '<a class="geri" href="#/">← Paketlerim</a>' : ''}
      <h1>${ek ? 'Yeni kod ekle' : 'Soru çözmeye başla'}</h1>
      <p class="alt-baslik">Satın aldığınız paketin erişim kodunu girin. Kod bu cihazda hatırlanır.</p>
      <form class="kutu kod-giris" id="form" autocomplete="off">
        <label for="kod">Erişim kodu</label>
        <input id="kod" inputmode="text" placeholder="EH-XXXX-XXXX" maxlength="14" spellcheck="false" required>
        <button class="dugme" type="submit" id="gonder">Kodu doğrula</button>
        <p class="hata" id="hata" role="alert"></p>
      </form>
      <p class="bilgi-not">Kodunuz satın alma sonrasında size iletilir. Paketleri incelemek için <a href="../#paketler">ana sayfaya</a> göz atın. Kodunuzla ilgili bir sorun olursa <a href="mailto:emrehocalgsakademi@gmail.com">emrehocalgsakademi@gmail.com</a> adresine yazın.</p>
    </div>`;
    const inp = document.getElementById('kod');
    inp.addEventListener('input', () => { const n = normal(inp.value).slice(0, 10); inp.value = n.length > 6 ? bicimle(n) : n.length > 2 ? `${n.slice(0, 2)}-${n.slice(2)}` : n; });
    document.getElementById('form').onsubmit = async e => {
      e.preventDefault();
      const n = normal(inp.value), hata = document.getElementById('hata'), btn = document.getElementById('gonder');
      if (n.length !== 10 || !n.startsWith('EH')) { hata.textContent = 'Kod EH-XXXX-XXXX biçiminde olmalı.'; return; }
      btn.disabled = true; btn.textContent = 'Doğrulanıyor…'; hata.textContent = '';
      try {
        if (!DIZIN) await oturumAc();
        const acilan = await koduAc(n);
        if (!acilan.length) { hata.textContent = 'Bu kod geçerli değil ya da iptal edilmiş. Lütfen kontrol edip tekrar deneyin.'; return; }
        const kodlar = depo.al('eh-kodlar', []);
        if (!kodlar.includes(n)) depo.yaz('eh-kodlar', [...kodlar, n]);
        location.hash = '#/';
        yonlendir();
      } catch (err) {
        hata.textContent = 'Bağlantı sorunu oluştu. İnternetinizi kontrol edip tekrar deneyin.';
      } finally { btn.disabled = false; btn.textContent = 'Kodu doğrula'; }
    };
    inp.focus();
  }

  async function paketlerim(dusen) {
    const acik = Object.keys(ANAHTAR);
    const kartlar = [];
    // Her ünite tek kartta: tam paket açıksa o, yoksa Yarış paketi açıksa o, hiçbiri yoksa kilitli kart
    const uniteler = Object.keys(KATALOG).filter(p => (KATALOG[p].seviye || 'tam') === 'tam');
    for (const u of uniteler) {
      const p = acik.includes(u) ? u : acik.includes(u + '-yaris') ? u + '-yaris' : u;
      const k = KATALOG[p], yaris = k.seviye === 'yaris';
      if (!acik.includes(p)) {
        kartlar.push(`<article class="kutu paket-kart"><span class="kucuk-yazi">🔒 Kilitli</span><h2>${k.ad}</h2><p class="kucuk-yazi">${k.soruSayisi} soru</p><div class="eylemler"><a class="dugme kucuk ikincil" href="../#paketler">Paketi incele</a></div></article>`);
        continue;
      }
      const P = await paketYukle(p), o = ozet(p, P.sorular);
      kartlar.push(`<article class="kutu paket-kart">
        <span class="kucuk-yazi">✓ Erişiminiz var</span><h2>${P.ad}</h2>
        <p class="kucuk-yazi">${o.cozulen} / ${P.sorular.length} soru çözüldü${o.cozulen ? ` · başarı %${o.oran}` : ''}</p>${cubuk(Math.round(o.cozulen / P.sorular.length * 100))}
        <div class="eylemler"><a class="dugme kucuk" href="#/p/${p}/test">Test çöz</a><a class="dugme kucuk ikincil" href="#/p/${p}/calis/tum/0">Çalış</a><a class="dugme kucuk ikincil" href="#/p/${p}/ilerleme">İlerlemem</a></div>
        ${yaris ? `<p class="bilgi-not">Bu bir <b>Yarış Paketi</b>dir. <a href="../#paketler">Tam Pakete yükseltin</a>: size gönderilen Tam Paket kodunu bu cihazda “+ Başka bir kod ekle” ile girin; ${(KATALOG[uniteOf(p)] || {}).soruSayisi || 400} sorunun hepsi açılır, çözdükleriniz korunur.</p>` : ''}
      </article>`);
    }
    uyg.innerHTML = `<h1>Paketlerim</h1><p class="alt-baslik">Bir paket seçin: sınav gibi <b>test çözün</b>, ya da soru soru <b>çalışın</b>.</p>
      ${dusen ? `<p class="hata">${dusen} kod artık geçerli olmadığı için bu cihazdan kaldırıldı.</p>` : ''}
      <div class="paket-izgara">${kartlar.join('')}</div>
      <p class="bilgi-not"><a href="#/kod">+ Başka bir kod ekle</a> · <a href="#" id="cikis">Kodlarımı bu cihazdan sil</a></p>`;
    document.getElementById('cikis').onclick = e => {
      e.preventDefault();
      if (!confirm('Bu cihazdaki erişim kodlarınız silinecek. İlerlemeniz korunur. Devam edilsin mi?')) return;
      depo.yaz('eh-kodlar', []); Object.keys(ANAHTAR).forEach(k => delete ANAHTAR[k]);
      location.hash = '#/'; yonlendir();
    };
  }

  function testSecimi(p, P) {
    const il = ilerleme(p), yanlis = P.sorular.filter(q => il[q.no] && il[q.no].son === 'y').length;
    const sec = (f, ad, alt) => `<a class="secenek" href="#/p/${p}/test/${encodeURIComponent(f)}"><b>${ad}</b><span>${alt}</span></a>`;
    const basamakKutulari = TURLER.map(([t, ad, aciklama]) => {
      const qs = P.sorular.filter(q => turOf(q) === t); if (!qs.length) return '';
      return `<div class="kutu basamak"><h2>${ad} <span class="kucuk-yazi">${aciklama} · ${qs.length} soru</span></h2><div class="test-bloklari">${bloklar(qs).map((blok, k) => {
        const o = ozet(p, blok), tamam = o.cozulen === blok.length;
        return `<a class="blok ${tamam ? 'tamam' : o.cozulen ? 'yarim' : ''}" href="#/p/${p}/test/${t}~${k + 1}"><b>Test ${k + 1}</b><span>${tamam ? `%${o.oran} başarı` : o.cozulen ? `${o.cozulen}/${blok.length} çözüldü` : `${blok.length} soru`}</span></a>`;
      }).join('')}</div></div>`;
    }).join('');
    const kazanimlar = [...new Set(P.sorular.map(q => q.kazanim))].sort();
    uyg.innerHTML = `<a class="geri" href="#/">← Paketlerim</a><h1>${P.ad} · Test</h1>
      <p class="alt-baslik">Her test yaklaşık ${BLOK} sorudur. Soruları işaretleyin, sonunda netinizi ve her sorunun çözümünü görün.</p>
      <div class="secenekler">
        ${sec('karma', '🎲 Karma test', `${BLOK} soru · üç basamaktan karışık, önce çözmediğiniz sorular`)}
        ${yanlis ? sec('yanlis', 'Yanlışlarım', `${Math.min(yanlis, BLOK)} soru · daha önce yanlış yaptıklarınız`) : ''}
      </div>
      ${basamakKutulari}
      <div class="kutu basamak"><h2>Konuya göre <span class="kucuk-yazi">her seferinde o kazanımdan ${BLOK} soru</span></h2><div class="secenekler">
        ${kazanimlar.map(k => sec(`k~${k}`, P.kazanimlar[k].konu, `${k} · ${P.sorular.filter(q => q.kazanim === k).length} soru`)).join('')}</div></div>`;
  }

  let TEST = null;
  function test(p, P, f) {
    if (!TEST || TEST.anahtar !== p + f) {
      const liste = testListesi(P, p, f);
      if (!liste.length) { location.hash = `#/p/${p}/test`; return; }
      TEST = { anahtar: p + f, liste, cevap: liste.map(() => null), i: 0, bitti: false };
    }
    TEST.bitti ? sonuc(p, P, f) : testCiz(p, P, f);
  }

  function testCiz(p, P, f) {
    const T = TEST, q = T.liste[T.i];
    uyg.innerHTML = `<a class="geri" href="#/p/${p}/test">← Test seçimi</a><h1>${P.ad} · ${filtreAdi(f, P)}</h1>
      <div class="soru-nav" aria-label="Sorular">${T.liste.map((_, i) => `<button type="button" data-i="${i}" class="${T.cevap[i] !== null ? 'isaretli' : ''} ${i === T.i ? 'aktif' : ''}">${i + 1}</button>`).join('')}</div>
      <div class="kutu">${soruBas(q, T.i + 1, P)}
        <div class="opts ${q.long ? 'long' : ''}">${q.opts.map((o, j) => `<button type="button" class="opt ${T.cevap[T.i] === j ? 'secili' : ''}" data-j="${j}"><b>${HARF[j]})</b>${o}</button>`).join('')}</div>
      </div>
      <div class="alt-cubuk"><span class="kucuk-yazi">${T.cevap.filter(c => c !== null).length} / ${T.liste.length} işaretlendi</span>
        <div class="sag"><button class="dugme kucuk ikincil" id="onceki" type="button" ${T.i ? '' : 'disabled'}>← Önceki</button>
        ${T.i < T.liste.length - 1 ? '<button class="dugme kucuk" id="sonraki" type="button">Sonraki →</button>' : ''}
        <button class="dugme kucuk ${T.i < T.liste.length - 1 ? 'ikincil' : ''}" id="bitir" type="button">Testi bitir</button></div></div>`;
    uyg.querySelectorAll('.soru-nav button').forEach(b => b.onclick = () => { T.i = +b.dataset.i; testCiz(p, P, f); });
    uyg.querySelectorAll('.opt').forEach(b => b.onclick = () => { const j = +b.dataset.j; T.cevap[T.i] = T.cevap[T.i] === j ? null : j; testCiz(p, P, f); });
    document.getElementById('onceki').onclick = () => { T.i--; testCiz(p, P, f); scrollTo(0, 0); };
    const s = document.getElementById('sonraki'); if (s) s.onclick = () => { T.i++; testCiz(p, P, f); scrollTo(0, 0); };
    document.getElementById('bitir').onclick = () => {
      const bos = T.cevap.filter(c => c === null).length;
      if (bos && !confirm(`${bos} soruyu boş bıraktınız. Testi bitirmek istiyor musunuz?`)) return;
      T.bitti = true;
      T.liste.forEach((q, i) => { if (T.cevap[i] !== null) kaydet(p, q.no, T.cevap[i] === q.ans); });
      sonuc(p, P, f); scrollTo(0, 0);
    };
  }

  function sonuc(p, P, f) {
    const T = TEST;
    const d = T.liste.filter((q, i) => T.cevap[i] === q.ans).length, b = T.cevap.filter(c => c === null).length, y = T.liste.length - d - b;
    const net = Math.round((d - y / 3) * 100) / 100;
    uyg.innerHTML = `<a class="geri" href="#/p/${p}/test">← Test seçimi</a><h1>Sonuç · ${filtreAdi(f, P)}</h1>
      <div class="kutu"><div class="puan-izgara"><div class="d"><b>${d}</b>Doğru</div><div class="y"><b>${y}</b>Yanlış</div><div><b>${b}</b>Boş</div><div class="n"><b>${String(net).replace('.', ',')}</b>Net</div></div>
        <p class="kucuk-yazi">LGS'deki gibi 3 yanlış 1 doğruyu götürür. Aşağıda her sorunun çözümünü açabilirsiniz.</p>
        <div class="eylemler" style="display:flex;flex-wrap:wrap;gap:.5rem"><button class="dugme kucuk" id="tekrar" type="button">${/^(karma|k~|yanlis)/.test(f) ? 'Yeni test' : 'Testi yeniden çöz'}</button>${(() => { const [a, b] = f.split('~'); return b && TURLER.some(t => t[0] === a) && +b < bloklar(filtrele(P, p, a)).length ? `<a class="dugme kucuk ikincil" href="#/p/${p}/test/${a}~${+b + 1}">Sonraki test →</a>` : ''; })()}<a class="dugme kucuk ikincil" href="#/p/${p}/ilerleme">İlerlememi gör</a></div></div>
      <div class="inceleme">${T.liste.map((q, i) => {
        const c = T.cevap[i], dogru = c === q.ans;
        const et = c === null ? '<span class="etiket b">Boş</span>' : dogru ? '<span class="etiket d">✓ Doğru</span>' : '<span class="etiket y">✗ Yanlış</span>';
        return `<div class="kutu">${soruBas(q, i + 1, P).replace('</div>', ` ${et}</div>`)}
          <div class="opts ${q.long ? 'long' : ''}">${q.opts.map((o, j) => `<div class="opt ${j === q.ans ? 'dogru' : j === c ? 'yanlis' : ''}"><b>${HARF[j]})</b>${o}</div>`).join('')}</div>
          ${c !== null && !dogru && q.celdirici[c] ? `<div class="celdirici-not"><b>Seçtiğiniz ${HARF[c]} şıkkı neden yanlış?</b> ${q.celdirici[c]}</div>` : ''}
          <details class="cozum-ac" ${c !== null && !dogru ? 'open' : ''}><summary>Çözümü göster</summary>${cozumHTML(q)}</details></div>`;
      }).join('')}</div>`;
    document.getElementById('tekrar').onclick = () => { TEST = null; test(p, P, f); scrollTo(0, 0); };
  }

  function calis(p, P, f, i) {
    const liste = filtrele(P, p, f);
    if (!liste.length) { uyg.innerHTML = `<a class="geri" href="#/p/${p}/calis/tum/0">← Tüm sorular</a><h1>${P.ad} · Çalış</h1><p class="alt-baslik">${f === 'yanlis' ? 'Yanlış yaptığınız soru yok. 👏' : f === 'cozulmemis' ? 'Bütün soruları çözdünüz. 👏' : 'Bu seçimde soru yok.'}</p>`; return; }
    i = Math.min(Math.max(0, i), liste.length - 1);
    const q = liste[i];
    let adim = 0, ipucu = 0, isaretlendi = false;
    uyg.innerHTML = `<a class="geri" href="#/">← Paketlerim</a><h1>${P.ad} · Çalış</h1>
      <div class="sekmeler" role="tablist">${['tum', ...TURLER.map(t => t[0]).filter(t => P.sorular.some(q => turOf(q) === t)), 'cozulmemis', 'yanlis'].filter((z, _, a) => !(z !== 'tum' && TURLER.some(t => t[0] === z) && a.filter(x => TURLER.some(t => t[0] === x)).length === 1)).map(z => `<a class="secenek" style="padding:.35rem .9rem;border-radius:999px;display:inline-block" href="#/p/${p}/calis/${encodeURIComponent(z)}/0" ${z === f ? 'aria-current="true"' : ''}>${z === f ? '<b style="display:inline">' + filtreAdi(z, P) + '</b>' : filtreAdi(z, P)}</a>`).join('')}</div>
      <label class="kazanim-sec">Konu: <select id="konuSec"><option value="">Tüm konular</option>${[...new Set(P.sorular.map(x => x.kazanim))].sort().map(k => `<option value="k~${k}" ${f === 'k~' + k ? 'selected' : ''}>${P.kazanimlar[k].konu} (${k})</option>`).join('')}</select></label>
      <div class="soru-kutu"><div>${soruBas(q, i + 1, P)}
        <div class="opts ${q.long ? 'long' : ''}">${q.opts.map((o, j) => `<button type="button" class="opt" data-j="${j}"><b>${HARF[j]})</b>${o}</button>`).join('')}</div>
        <div class="feedback" id="geri" aria-live="polite"></div></div>
        <div class="cozum-alani"><div class="dugmeler">
          <button class="dugme kucuk ikincil" type="button" id="ipucuBtn">💡 İpucu</button>
          <button class="dugme kucuk" type="button" id="adimBtn">▶ Çözüme başla</button>
          <button class="dugme kucuk ikincil" type="button" id="tumuBtn">Tümünü göster</button></div>
          <div id="ipuclari"></div><ol class="steps" id="adimlar"></ol><div id="sonra"></div>
          <p class="bos" id="bos">Önce kendin çözmeyi dene. Takılırsan ipucu al ya da çözümü adım adım aç.</p></div></div>
      <div class="alt-cubuk"><span class="kucuk-yazi">${i + 1} / ${liste.length}</span><div class="sag">
        <a class="dugme kucuk ikincil" href="#/p/${p}/calis/${encodeURIComponent(f)}/${i - 1}" ${i ? '' : 'aria-disabled="true" tabindex="-1"'}>← Önceki</a>
        <a class="dugme kucuk" href="#/p/${p}/calis/${encodeURIComponent(f)}/${i + 1}" ${i < liste.length - 1 ? '' : 'aria-disabled="true" tabindex="-1"'}>Sonraki →</a></div></div>`;
    uyg.querySelectorAll('.alt-cubuk [aria-disabled]').forEach(a => a.onclick = e => e.preventDefault());
    document.getElementById('konuSec').onchange = e => { location.hash = `#/p/${p}/calis/${encodeURIComponent(e.target.value || 'tum')}/0`; };
    const $ = id => document.getElementById(id);
    uyg.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const j = +b.dataset.j, g = $('geri');
      if (!isaretlendi) { kaydet(p, q.no, j === q.ans); isaretlendi = true; }
      if (j === q.ans) { b.classList.add('right'); g.className = 'feedback ok'; g.textContent = 'Doğru! 🎉'; }
      else {
        b.classList.add('wrong'); g.className = 'feedback no'; g.textContent = 'Bu şık doğru değil.';
        if (q.celdirici[j]) g.innerHTML += `<div class="celdirici-not"><b>${HARF[j]} şıkkını seçen öğrencinin muhtemel hatası:</b> ${q.celdirici[j]}</div>`;
      }
    });
    function ciz() {
      const bitti = adim === q.steps.length;
      $('ipuclari').innerHTML = q.hints.slice(0, ipucu).map(h => `<div class="hint">${h}</div>`).join('');
      $('adimlar').innerHTML = q.steps.slice(0, adim).map(s => `<li>${s}</li>`).join('');
      $('sonra').innerHTML = bitti ? `<div class="answer">${q.answer}</div>${q.trap ? `<div class="trap">${q.trap}</div>` : ''}<details class="celdiriciler" open><summary>Çeldirici analizi</summary><ul>${Object.entries(q.celdirici).map(([j, t]) => `<li><b>${HARF[j]})</b> ${/<svg/.test(q.opts[j]) ? "" : q.opts[j] + " — "}${t}</li>`).join('')}</ul></details>` : '';
      $('bos').hidden = !!(adim || ipucu);
      $('ipucuBtn').disabled = ipucu >= q.hints.length; $('adimBtn').disabled = bitti; $('tumuBtn').disabled = bitti;
      $('adimBtn').textContent = adim ? `▶ Sonraki adım (${adim}/${q.steps.length})` : '▶ Çözüme başla';
    }
    $('ipucuBtn').onclick = () => { ipucu++; ciz(); };
    $('adimBtn').onclick = () => { adim++; ciz(); };
    $('tumuBtn').onclick = () => { adim = q.steps.length; ciz(); };
    ciz();
  }

  function rapor(p, P) {
    const il = ilerleme(p), o = ozet(p, P.sorular);
    const satir = (ad, sorular, baslik) => {
      const x = ozet(p, sorular);
      return `<tr><td>${baslik ? `<span title="${kacis(baslik)}">${ad}</span>` : ad}</td><td>${x.cozulen}/${sorular.length}</td><td class="oran">${x.cozulen ? `%${x.oran}${cubuk(x.oran, x.oran < 50)}` : '<span class="kucuk-yazi">Henüz çözülmedi</span>'}</td></tr>`;
    };
    const kazanimlar = [...new Set(P.sorular.map(q => q.kazanim))].sort();
    const zayif = kazanimlar.map(k => ({ k, x: ozet(p, P.sorular.filter(q => q.kazanim === k)) })).filter(z => z.x.cozulen >= 2 && z.x.oran < 60);
    uyg.innerHTML = `<a class="geri" href="#/">← Paketlerim</a><h1>${P.ad} · İlerlemem</h1>
      <p class="alt-baslik">${o.cozulen} / ${P.sorular.length} soru çözüldü · ${o.dogru} doğru, ${o.yanlis} yanlış (son denemelere göre)</p>
      ${zayif.length ? `<div class="kutu" style="border-color:var(--accent)"><b>Tekrar etmen gereken konular:</b> ${zayif.map(z => P.kazanimlar[z.k].konu).join(', ')}</div><br>` : ''}
      <div class="kutu"><h2 style="font-size:1.1rem;margin:0 0 .4rem">Konulara (kazanımlara) göre</h2><table class="rapor"><tr><th>Konu</th><th>Çözülen</th><th>Başarı</th></tr>
        ${kazanimlar.map(k => satir(`${P.kazanimlar[k].konu} <span class="kucuk-yazi">${k}</span>`, P.sorular.filter(q => q.kazanim === k), P.kazanimlar[k].metin)).join('')}</table></div><br>
      <div class="kutu"><h2 style="font-size:1.1rem;margin:0 0 .4rem">Basamaklara göre</h2><table class="rapor"><tr><th>Basamak</th><th>Çözülen</th><th>Başarı</th></tr>
        ${TURLER.filter(([t]) => P.sorular.some(q => turOf(q) === t)).map(([t, ad, aciklama]) => satir(ad, P.sorular.filter(q => turOf(q) === t), aciklama)).join('')}</table></div><br>
      <div class="kutu"><h2 style="font-size:1.1rem;margin:0 0 .4rem">Zorluğa göre</h2><table class="rapor"><tr><th>Zorluk</th><th>Çözülen</th><th>Başarı</th></tr>
        ${ZORLUKLAR.map(z => satir(`<span class="tag zorluk" data-z="${z}">${z}</span>`, P.sorular.filter(q => q.zorluk === z))).join('')}</table></div>
      <div class="eylemler" style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem">
        ${o.yanlis ? `<a class="dugme kucuk" href="#/p/${p}/test/yanlis">Yanlışlarımı tekrar çöz (${Math.min(o.yanlis, BLOK)})</a>` : ''}
        <a class="dugme kucuk ikincil" href="#/p/${p}/test">Yeni test</a>
        ${o.cozulen ? '<button class="dugme kucuk ikincil" id="sifirla" type="button">İlerlemeyi sıfırla</button>' : ''}</div>`;
    const s = document.getElementById('sifirla');
    if (s) s.onclick = () => { if (!confirm('Bu paketteki ilerlemeniz silinecek. Emin misiniz?')) return; const t = depo.al('eh-ilerleme', {}); delete t[uniteOf(p)]; depo.yaz('eh-ilerleme', t); rapor(p, P); };
    void il;
  }

  // ---------- Yönlendirme ----------
  let hazir = false, dusen = 0;
  async function yonlendir() {
    const parca = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    try {
      if (!hazir) { yukleniyor(); dusen = await oturumAc(); hazir = true; }
    } catch (e) { uyg.innerHTML = '<p class="hata">Veriler yüklenemedi. İnternet bağlantınızı kontrol edip sayfayı yenileyin.</p>'; return; }
    if (parca[0] === 'kod') return kodEkrani(true);
    if (!Object.keys(ANAHTAR).length) return kodEkrani(false);
    if (parca[0] !== 'p' || !ANAHTAR[parca[1]]) { await paketlerim(dusen); dusen = 0; return; }
    const p = parca[1];
    yukleniyor();
    const P = await paketYukle(p);
    if (parca[2] === 'test' && parca[3]) test(p, P, parca[3]);
    else if (parca[2] === 'test') testSecimi(p, P);
    else if (parca[2] === 'calis') calis(p, P, parca[3] || 'tum', +parca[4] || 0);
    else if (parca[2] === 'ilerleme') rapor(p, P);
    else testSecimi(p, P);
    scrollTo(0, 0);
  }
  addEventListener('hashchange', yonlendir);
  yonlendir();
})();
