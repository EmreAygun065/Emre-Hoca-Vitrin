// Vitrin sayfasının davranışı: tema, satın alma düğmeleri, iletişim ve ücretsiz örnek sorular.
(function () {
  const $ = id => document.getElementById(id);
  const A = window.AYARLAR || {};
  const SORULAR = window.ORNEKLER || [];
  const HARF = ['A', 'B', 'C', 'D'];

  // Tema
  const kok = document.documentElement;
  $('tema').onclick = () => {
    const koyu = kok.dataset.theme ? kok.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    kok.dataset.theme = koyu ? 'light' : 'dark';
    try { localStorage.setItem('tema', kok.dataset.theme); } catch (e) {}
  };
  $('yil').textContent = new Date().getFullYear();

  // İletişim: WhatsApp ve e-posta (ayarlar.js'te doluysa görünür)
  const waLink = metin => A.whatsapp ? `https://wa.me/${A.whatsapp}?text=${encodeURIComponent(metin)}` : '';
  const mailLink = (konu, metin) => A.eposta ? `mailto:${A.eposta}?subject=${encodeURIComponent(konu)}&body=${encodeURIComponent(metin)}` : '';
  const iletisimDugmeleri = [];
  if (A.whatsapp) iletisimDugmeleri.push(`<a class="dugme kucuk" href="${waLink('Merhaba, Emre Hoca LGS Akademi hakkında bilgi almak istiyorum.')}" target="_blank" rel="noopener">WhatsApp'tan yaz</a>`);
  if (A.eposta) iletisimDugmeleri.push(`<a class="dugme kucuk ikincil" href="${mailLink('Emre Hoca LGS Akademi', '')}">E-posta gönder</a>`);
  if (iletisimDugmeleri.length) {
    $('iletisimMetin').textContent = 'Soru, öneri ve kurum lisansı için bize ulaşın.';
    $('iletisimDugmeler').innerHTML = iletisimDugmeleri.join('');
  }
  const yonlendir = (a, metin) => {
    const link = waLink(metin) || mailLink('Emre Hoca LGS Akademi', metin);
    if (link) { a.href = link; if (link.startsWith('https')) { a.target = '_blank'; a.rel = 'noopener'; } }
  };
  document.querySelectorAll('[data-iletisim]').forEach(a => yonlendir(a, a.dataset.iletisim));
  document.querySelectorAll('[data-haber]').forEach(a => {
    const ad = a.closest('.paket').querySelector('h3').textContent.split('·')[0].trim();
    yonlendir(a, `Merhaba, ${ad} paketi çıkınca bana haber verir misiniz?`);
  });

  // Paket fiyatı ve satın alma düğmesi
  document.querySelectorAll('[data-paket]').forEach(kart => {
    const p = (A.paketler || {})[kart.dataset.paket] || {};
    if (p.fiyat) kart.querySelector('[data-fiyat]').innerHTML = `${p.fiyat} TL <small>· tek seferlik</small>`;
    const dugme = kart.querySelector('[data-satin-al]');
    if (p.shopier) {
      dugme.href = p.shopier; dugme.target = '_blank'; dugme.rel = 'noopener';
      dugme.removeAttribute('aria-disabled'); dugme.textContent = 'Satın al';
    } else {
      dugme.addEventListener('click', e => e.preventDefault());
    }
  });

  if (!SORULAR.length) return;
  const etiketler = q => `<span class="tag">${q.konu}</span><span class="tag" title="${q.kazanimMetni}">${q.kazanim}</span><span class="tag zorluk" data-z="${q.zorluk}">${q.zorluk}</span>`;

  // Üst bölümdeki tanıtım kartı: zor sorulardan biri, şıklarıyla
  const vitrin = SORULAR.find(q => q.zorluk === 'Zor') || SORULAR[0];
  $('vitrinSoru').innerHTML = `<div class="qhead">${etiketler(vitrin)}</div><div class="qtext">${vitrin.q}</div>`
    + `<div class="opts ${vitrin.long ? 'long' : ''}">${vitrin.opts.map((o, i) => `<span class="opt"><b>${HARF[i]})</b>${o}</span>`).join('')}</div>`
    + `<p style="margin:1rem 0 0"><a class="dugme kucuk ikincil" href="#ornekler" id="vitrinCoz">Bu soruyu çöz →</a></p>`;
  $('vitrinCoz').onclick = () => sec(SORULAR.indexOf(vitrin));

  // Örnek soru çözücü
  let cur = 0, adim = 0, ipucu = 0;
  $('sekmeler').innerHTML = SORULAR.map((q, i) => `<button type="button" role="tab" data-i="${i}">${i + 1} · ${q.zorluk}</button>`).join('');
  $('sekmeler').querySelectorAll('button').forEach(b => b.onclick = () => sec(+b.dataset.i));

  function sec(i) {
    cur = i; adim = 0; ipucu = 0;
    $('sekmeler').querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', +b.dataset.i === i));
    const q = SORULAR[i];
    $('soru').innerHTML = `<div class="qhead"><span class="qno">${i + 1}</span>${etiketler(q)}</div><div class="qtext">${q.q}</div>`
      + `<div class="opts ${q.long ? 'long' : ''}">${q.opts.map((o, j) => `<button type="button" class="opt" data-j="${j}"><b>${HARF[j]})</b>${o}</button>`).join('')}</div>`
      + `<div class="feedback" id="geri" aria-live="polite"></div>`;
    $('soru').querySelectorAll('.opt').forEach(b => b.onclick = () => isaretle(+b.dataset.j, b));
    cozum();
  }

  function isaretle(j, b) {
    const q = SORULAR[cur], g = $('geri');
    if (j === q.ans) {
      b.classList.add('right'); g.className = 'feedback ok'; g.textContent = 'Doğru! 🎉';
    } else {
      b.classList.add('wrong'); g.className = 'feedback no'; g.textContent = 'Bu şık doğru değil.';
      if (q.celdirici[j]) g.innerHTML += `<div class="celdirici-not"><b>${HARF[j]} şıkkını seçen öğrencinin muhtemel hatası:</b> ${q.celdirici[j]}</div>`;
    }
  }

  function cozum() {
    const q = SORULAR[cur], bitti = adim === q.steps.length;
    $('ipuclari').innerHTML = q.hints.slice(0, ipucu).map(h => `<div class="hint">${h}</div>`).join('');
    $('adimlar').innerHTML = q.steps.slice(0, adim).map(s => `<li>${s}</li>`).join('');
    $('sonra').innerHTML = bitti ? `<div class="answer">${q.answer}</div>${q.trap ? `<div class="trap">${q.trap}</div>` : ''}`
      + `<details class="celdiriciler" open><summary>Çeldirici analizi</summary><ul>${Object.entries(q.celdirici).map(([j, t]) => `<li><b>${HARF[j]})</b> ${q.opts[j]} — ${t}</li>`).join('')}</ul></details>` : '';
    $('bos').hidden = !!(adim || ipucu);
    $('ipucuBtn').disabled = ipucu >= q.hints.length;
    $('adimBtn').disabled = bitti;
    $('tumuBtn').disabled = bitti;
    $('adimBtn').textContent = adim ? `▶ Sonraki adım (${adim}/${q.steps.length})` : '▶ Çözüme başla';
  }

  $('ipucuBtn').onclick = () => { ipucu = Math.min(ipucu + 1, SORULAR[cur].hints.length); cozum(); };
  $('adimBtn').onclick = () => { adim = Math.min(adim + 1, SORULAR[cur].steps.length); cozum(); };
  $('tumuBtn').onclick = () => { adim = SORULAR[cur].steps.length; cozum(); };

  sec(0);
})();
