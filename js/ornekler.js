// Vitrindeki ücretsiz örnek sorular: her paketten 4 soru (her zorluktan bir tane).
// Bu dosya benim-projem deposundaki soru havuzundan üretilir; paketlerin geri kalanı burada yer almaz.
window.ORNEKLER = [
 {
  "unite": "Üslü İfadeler",
  "kazanim": "M.8.1.2.1",
  "kazanimMetni": "Tam sayıların, tam sayı kuvvetlerini hesaplar.",
  "konu": "Tam sayı kuvvetleri",
  "zorluk": "Kolay",
  "q": "<p>Ela'nın elinde üzerinde üslü ifadeler yazan dört kart vardır.</p><div class=\"cards \"><span>(−2)<sup>4</sup></span><span>−2<sup>4</sup></span><span>(−3)<sup>3</sup></span><span>(−1)<sup>100</sup></span></div><p>Ela, değeri pozitif olan kartları seçip bu kartlardaki sayıları topluyor.</p><p class=\"ask\">Ela'nın bulduğu toplam kaçtır?</p>",
  "opts": [
   "1",
   "17",
   "33",
   "44"
  ],
  "ans": 1,
  "long": false,
  "hints": [
   "Parantez varsa üs, eksi işaretiyle birlikte tüm sayıya etki eder; parantez yoksa yalnızca sayıya.",
   "Negatif bir sayının çift kuvveti pozitif, tek kuvveti negatiftir."
  ],
  "steps": [
   "(−2)<sup>4</sup> = 16 → pozitif",
   "−2<sup>4</sup> = −(2 · 2 · 2 · 2) = −16 → negatif",
   "(−3)<sup>3</sup> = −27 → negatif · (−1)<sup>100</sup> = 1 → pozitif",
   "Toplam: 16 + 1 = <b>17</b>"
  ],
  "answer": "Toplam 17. Cevap: <b>B</b>",
  "celdirici": {
   "0": "(−2)<sup>4</sup>'ün negatif olduğunu sanıp yalnızca (−1)<sup>100</sup>'ü almak. Negatif tabanın <b>çift</b> kuvveti pozitiftir.",
   "2": "−2<sup>4</sup>'ü (−2)<sup>4</sup> ile karıştırmak: 16 + 16 + 1 = 33. Parantez yoksa eksi işareti üssün içine girmez.",
   "3": "(−3)<sup>3</sup>'ü pozitif sanmak: 16 + 27 + 1 = 44. Negatif tabanın <b>tek</b> kuvveti negatiftir."
  },
  "trap": ""
 },
 {
  "unite": "Üslü İfadeler",
  "kazanim": "M.8.1.2.3",
  "kazanimMetni": "Sayıların ondalık gösterimlerini 10'un tam sayı kuvvetlerini kullanarak çözümler.",
  "konu": "Ondalık çözümleme",
  "zorluk": "Orta",
  "q": "<p>Bir kuyumcunun hassas terazisi, tartılan altın tozunun kütlesini gram cinsinden ekranda çözümlenmiş olarak gösteriyor.</p><div class=\"fig\"><svg viewBox=\"0 0 440 210\" width=\"440\" role=\"img\" aria-label=\"Hassas terazi; ekranda 3 çarpı 10 üssü eksi 1 artı 4 çarpı 10 üssü eksi 3 artı 5 çarpı 10 üssü eksi 4 gram yazıyor\">\n    <ellipse cx=\"220\" cy=\"70\" rx=\"130\" ry=\"13\" fill=\"#d7dbe0\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/>\n    <path d=\"M172 68 Q220 12 268 68 Z\" fill=\"#e8b923\" stroke=\"#b8860b\" stroke-width=\"1.5\"/>\n    <rect x=\"207\" y=\"82\" width=\"26\" height=\"16\" fill=\"#9aa3ad\"/>\n    <rect x=\"40\" y=\"96\" width=\"360\" height=\"104\" rx=\"14\" fill=\"var(--blue-soft)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/>\n    <rect x=\"60\" y=\"114\" width=\"320\" height=\"48\" rx=\"6\" fill=\"#1f2328\"/>\n    <text x=\"220\" y=\"145\" text-anchor=\"middle\" font-size=\"19\" font-weight=\"700\" style=\"fill:#8ef0a8\">3 · 10⁻¹ + 4 · 10⁻³ + 5 · 10⁻⁴ g</text>\n    <text x=\"220\" y=\"186\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"2\" style=\"fill:var(--muted)\">HASSAS TERAZİ</text></svg></div><p class=\"ask\">Tartılan altın tozu kaç gramdır?</p>",
  "opts": [
   "0,3045",
   "0,345",
   "0,03045",
   "3,045"
  ],
  "ans": 0,
  "long": false,
  "hints": [
   "10<sup>−1</sup> onda birler, 10<sup>−2</sup> yüzde birler, 10<sup>−3</sup> binde birler, 10<sup>−4</sup> on binde birler basamağıdır.",
   "Hiç yazılmayan bir basamak var mı?"
  ],
  "steps": [
   "3 · 10<sup>−1</sup> = 0,3 · 4 · 10<sup>−3</sup> = 0,004 · 5 · 10<sup>−4</sup> = 0,0005",
   "10<sup>−2</sup> (yüzde birler) basamağı verilmemiş → o basamak 0",
   "0,3 + 0,004 + 0,0005 = <b>0,3045</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "celdirici": {
   "1": "Rakamları sırayla yan yana yazmak. 10<sup>−2</sup> basamağı verilmediği için oraya 0 gelmelidir.",
   "2": "3 · 10<sup>−1</sup>'i 0,03 sanmak. 10<sup>−1</sup>, virgülden sonraki <b>ilk</b> basamaktır.",
   "3": "10<sup>−1</sup>'i birler basamağı sanmak; bütün basamaklar bir sola kayar. Birler basamağı 10<sup>0</sup>'dır."
  },
  "trap": ""
 },
 {
  "unite": "Üslü İfadeler",
  "kazanim": "M.8.1.2.2",
  "kazanimMetni": "Üslü ifadelerle ilgili temel kuralları anlar, birbirine denk ifadeler oluşturur.",
  "konu": "Temel kurallar",
  "zorluk": "Zor",
  "q": "<p>İki sosyal medya hesabının başlangıçtaki takipçi sayıları ve bu sayıların her ay nasıl değiştiği aşağıda verilmiştir.</p><div class=\"fig\"><svg viewBox=\"0 0 540 220\" width=\"540\" role=\"img\" aria-label=\"A hesabı başlangıçta 4 üssü 6 takipçi, her ay 2 katına çıkıyor; B hesabı başlangıçta 8 üssü 6 takipçi, her ay yarısına iniyor\">\n      <rect x=\"25\" y=\"10\" width=\"230\" height=\"200\" rx=\"20\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/>\n      <circle cx=\"67\" cy=\"50\" r=\"22\" fill=\"var(--green-soft)\" stroke=\"var(--green)\" stroke-width=\"2\"/>\n      <circle cx=\"67\" cy=\"44\" r=\"7\" fill=\"var(--green)\"/><path d=\"M54 64 q13 -16 26 0\" fill=\"var(--green)\"/>\n      <text x=\"99\" y=\"47\" font-size=\"17\" font-weight=\"700\">A hesabı</text>\n      <text x=\"99\" y=\"66\" font-size=\"13\" style=\"fill:var(--muted)\">başlangıç</text>\n      <text x=\"140\" y=\"128\" text-anchor=\"middle\" font-size=\"44\" font-weight=\"700\">4⁶</text><text x=\"140\" y=\"152\" text-anchor=\"middle\" font-size=\"14\" style=\"fill:var(--muted)\">takipçi</text>\n      <rect x=\"45\" y=\"166\" width=\"190\" height=\"32\" rx=\"16\" fill=\"var(--green-soft)\"/>\n      <text x=\"140\" y=\"187\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" style=\"fill:var(--green)\">▲ Her ay 2 katına</text>\n      <rect x=\"285\" y=\"10\" width=\"230\" height=\"200\" rx=\"20\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/>\n      <circle cx=\"327\" cy=\"50\" r=\"22\" fill=\"var(--red-soft)\" stroke=\"var(--red)\" stroke-width=\"2\"/>\n      <circle cx=\"327\" cy=\"44\" r=\"7\" fill=\"var(--red)\"/><path d=\"M314 64 q13 -16 26 0\" fill=\"var(--red)\"/>\n      <text x=\"359\" y=\"47\" font-size=\"17\" font-weight=\"700\">B hesabı</text>\n      <text x=\"359\" y=\"66\" font-size=\"13\" style=\"fill:var(--muted)\">başlangıç</text>\n      <text x=\"400\" y=\"128\" text-anchor=\"middle\" font-size=\"44\" font-weight=\"700\">8⁶</text><text x=\"400\" y=\"152\" text-anchor=\"middle\" font-size=\"14\" style=\"fill:var(--muted)\">takipçi</text>\n      <rect x=\"305\" y=\"166\" width=\"190\" height=\"32\" rx=\"16\" fill=\"var(--red-soft)\"/>\n      <text x=\"400\" y=\"187\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" style=\"fill:var(--red)\">▼ Her ay yarısına</text></svg></div><p class=\"ask\">İki hesabın takipçi sayıları eşit olduğu ayda, iki hesabın <u>toplam</u> takipçi sayısı kaçtır?</p>",
  "opts": [
   "2<sup>15</sup>",
   "2<sup>16</sup>",
   "2<sup>19</sup>",
   "2<sup>30</sup>"
  ],
  "ans": 1,
  "long": false,
  "hints": [
   "4<sup>6</sup> ve 8<sup>6</sup>'yı 2'nin kuvveti olarak yaz.",
   "n ay sonra A hesabı 2<sup>12+n</sup>, B hesabı 2<sup>18−n</sup> takipçiye sahip olur."
  ],
  "steps": [
   "4<sup>6</sup> = (2<sup>2</sup>)<sup>6</sup> = 2<sup>12</sup> · 8<sup>6</sup> = (2<sup>3</sup>)<sup>6</sup> = 2<sup>18</sup>",
   "n ay sonra: A = 2<sup>12+n</sup>, B = 2<sup>18−n</sup> → 12 + n = 18 − n → n = 3",
   "3. ayda iki hesabın da 2<sup>15</sup> takipçisi olur",
   "Toplam: 2<sup>15</sup> + 2<sup>15</sup> = 2 · 2<sup>15</sup> = <b>2<sup>16</sup></b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "celdirici": {
   "0": "Bir hesabın takipçi sayısında durmak. Soru iki hesabın <b>toplamını</b> soruyor.",
   "2": "B hesabının azaldığını unutup 12 + n = 18 → n = 6 bulmak ve iki hesapta da 2<sup>18</sup> olduğunu sanmak: 2 · 2<sup>18</sup> = 2<sup>19</sup>.",
   "3": "2<sup>15</sup> + 2<sup>15</sup> toplamında üsleri toplamak (ya da tabanları toplayıp 4<sup>15</sup> yazmak; 4<sup>15</sup> = 2<sup>30</sup>). Toplamada ne üsler ne tabanlar toplanır: 2<sup>15</sup> + 2<sup>15</sup> = 2 · 2<sup>15</sup>."
  },
  "trap": "Eşitlik ayını bulunca durmamak gerekir. Asıl tuzak son adımdaki toplamadır: aynı iki kuvvetin toplamı, o kuvvetin <b>2 katıdır</b>."
 },
 {
  "unite": "Üslü İfadeler",
  "kazanim": "M.8.1.2.1",
  "kazanimMetni": "Tam sayıların, tam sayı kuvvetlerini hesaplar.",
  "konu": "Tam sayı kuvvetleri",
  "zorluk": "Çok zor",
  "q": "<p>Bir kâğıt her katlamada tam ortadan ikiye katlanıyor. Katlama bittikten sonra katlı kâğıda, katlama çizgilerine değmeyecek şekilde delikler açılıyor.</p><div class=\"fig\"><svg viewBox=\"0 0 560 250\" width=\"560\" role=\"img\" aria-label=\"Kâğıt 1 kez katlanınca 2 kat, 2 kez katlanınca 4 kat oluyor. Ayşe 4 kez katlayıp 3 delik, Ali n kez katlayıp 1 delik açıyor\"><rect x=\"20\" y=\"40\" width=\"90\" height=\"80\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><text x=\"65\" y=\"145\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">Açık kâğıt</text><line x1=\"118\" y1=\"80\" x2=\"146\" y2=\"80\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"146,80 136.8,76.1 136.8,83.9\" fill=\"var(--fig-stroke)\"/><rect x=\"158\" y=\"44\" width=\"45\" height=\"80\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"154\" y=\"40\" width=\"45\" height=\"80\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><text x=\"180\" y=\"145\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">1 katlama</text><text x=\"180\" y=\"162\" text-anchor=\"middle\" font-size=\"13\">2 kat</text><line x1=\"214\" y1=\"80\" x2=\"242\" y2=\"80\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"242,80 232.8,76.1 232.8,83.9\" fill=\"var(--fig-stroke)\"/><rect x=\"262\" y=\"72\" width=\"45\" height=\"40\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"258\" y=\"68\" width=\"45\" height=\"40\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"254\" y=\"64\" width=\"45\" height=\"40\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"250\" y=\"60\" width=\"45\" height=\"40\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><text x=\"280\" y=\"145\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">2 katlama</text><text x=\"280\" y=\"162\" text-anchor=\"middle\" font-size=\"13\">4 kat</text><line x1=\"345\" y1=\"15\" x2=\"345\" y2=\"235\" stroke=\"var(--line)\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><rect x=\"388\" y=\"28\" width=\"150\" height=\"70\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"384\" y=\"24\" width=\"150\" height=\"70\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"380\" y=\"20\" width=\"150\" height=\"70\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><circle cx=\"420\" cy=\"63\" r=\"7\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><circle cx=\"455\" cy=\"63\" r=\"7\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><circle cx=\"490\" cy=\"63\" r=\"7\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><text x=\"459\" y=\"116\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">Ayşe: 4 katlama, 3 delik</text><rect x=\"388\" y=\"148\" width=\"150\" height=\"60\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"384\" y=\"144\" width=\"150\" height=\"60\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"380\" y=\"140\" width=\"150\" height=\"60\" fill=\"#fff\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><circle cx=\"455\" cy=\"178\" r=\"7\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><text x=\"459\" y=\"232\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">Ali: n katlama, 1 delik</text></svg></div><p class=\"ask\">Kâğıtlar açıldığında, Ali'nin kâğıdındaki delik sayısının Ayşe'nin kâğıdındaki delik sayısının 4 katından <u>fazla</u> olması için n <u>en az</u> kaçtır?</p>",
  "opts": [
   "6",
   "7",
   "8",
   "12"
  ],
  "ans": 2,
  "long": false,
  "hints": [
   "n kez katlanan kâğıt 2<sup>n</sup> kat olur; açılan her delik, kâğıt açılınca 2<sup>n</sup> delik demektir.",
   "Ayşe'nin delik sayısını yaz: 3 · 2<sup>4</sup>."
  ],
  "steps": [
   "Ayşe: 4 katlama → 2<sup>4</sup> = 16 kat → 3 · 16 = 48 delik",
   "4 katı: 4 · 48 = 192",
   "Ali: 2<sup>n</sup> > 192 olmalı → 2<sup>7</sup> = 128 (yetmez), 2<sup>8</sup> = 256 (yeter)",
   "n en az <b>8</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "celdirici": {
   "0": "“4 katı = 2<sup>2</sup>” deyip 4 + 2 = 6 kez katlamak ve Ayşe'nin 3 deliğini hesaba katmamak (2<sup>6</sup> = 64 < 192).",
   "1": "Ayşe'nin 3 deliğini unutup 2<sup>4</sup> · 4 = 64'ten fazlası için 2<sup>7</sup>'yi bulmak. 128 < 192 olduğu için yetmez.",
   "3": "Delik sayısıyla katlama sayısını karıştırıp 4 · 3 = 12 kez katlamak."
  },
  "trap": "“Fazla” kelimesi önemli: 192'ye eşit olmak yetmez, geçmek gerekir. Ayrıca Ayşe'nin <b>3</b> deliği hesaba katılmazsa cevap küçük çıkar."
 },
 {
  "unite": "Kareköklü İfadeler",
  "kazanim": "M.8.1.3.1",
  "kazanimMetni": "Tam kare pozitif tam sayılarla bu sayıların karekökleri arasındaki ilişkiyi belirler.",
  "konu": "Tam kare sayılar",
  "zorluk": "Kolay",
  "q": "<p>Kare şeklindeki bir oyun parkının alanı 196 m<sup>2</sup>'dir. Parkın çevresi, şekildeki gibi çitle çevrilecektir.</p><div class=\"fig\"><svg viewBox=\"0 0 330 300\" width=\"330\" role=\"img\" aria-label=\"Kare şeklinde, alanı 196 metrekare olan park; çevresi çitle çevrilecek\"><rect x=\"60\" y=\"20\" width=\"220\" height=\"220\" fill=\"#bfe3a6\" stroke=\"#8a6a3a\" stroke-width=\"4\" stroke-dasharray=\"10 6\"/><circle cx=\"100\" cy=\"60\" r=\"15\" fill=\"#5cb85c\" stroke=\"#3b7a3b\" stroke-width=\"2\"/><rect x=\"98\" y=\"73\" width=\"4\" height=\"8\" fill=\"#8a6a3a\"/><circle cx=\"240\" cy=\"70\" r=\"15\" fill=\"#5cb85c\" stroke=\"#3b7a3b\" stroke-width=\"2\"/><rect x=\"238\" y=\"83\" width=\"4\" height=\"8\" fill=\"#8a6a3a\"/><circle cx=\"120\" cy=\"200\" r=\"15\" fill=\"#5cb85c\" stroke=\"#3b7a3b\" stroke-width=\"2\"/><rect x=\"118\" y=\"213\" width=\"4\" height=\"8\" fill=\"#8a6a3a\"/><circle cx=\"230\" cy=\"190\" r=\"15\" fill=\"#5cb85c\" stroke=\"#3b7a3b\" stroke-width=\"2\"/><rect x=\"228\" y=\"203\" width=\"4\" height=\"8\" fill=\"#8a6a3a\"/><circle cx=\"170\" cy=\"110\" r=\"15\" fill=\"#5cb85c\" stroke=\"#3b7a3b\" stroke-width=\"2\"/><rect x=\"168\" y=\"123\" width=\"4\" height=\"8\" fill=\"#8a6a3a\"/><rect x=\"95\" y=\"128\" width=\"150\" height=\"34\" rx=\"8\" fill=\"var(--card)\" stroke=\"var(--fig-stroke)\"/><text x=\"170\" y=\"151\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" >Alan = 196 m²</text><text x=\"170\" y=\"268\" text-anchor=\"middle\" font-size=\"14\" style=\"fill:var(--muted)\">Kesikli çizgi: çit</text></svg></div><p class=\"ask\">Kullanılacak çitin uzunluğu kaç metredir?</p>",
  "opts": [
   "28",
   "49",
   "56",
   "784"
  ],
  "ans": 2,
  "long": false,
  "hints": [
   "Karenin alanı = kenar · kenar. Hangi sayının karesi 196?"
  ],
  "steps": [
   "14 · 14 = 196 → <span class=\"kok\">√<span>196</span></span> = 14 → bir kenar 14 m",
   "Çevre = 4 · 14",
   "= <b>56 m</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "celdirici": {
   "0": "Yalnızca iki kenarı toplamak (14 + 14). Karenin dört kenarı vardır.",
   "1": "Alanı 4'e bölmek (196 : 4 = 49). Önce kenar uzunluğu bulunmalıdır.",
   "3": "Alanı 4 ile çarpmak. Çevre, kenar uzunluğunun 4 katıdır; alanın değil."
  },
  "trap": ""
 },
 {
  "unite": "Kareköklü İfadeler",
  "kazanim": "M.8.1.3.2",
  "kazanimMetni": "Tam kare olmayan kareköklü bir ifadenin hangi iki doğal sayı arasında olduğunu belirler.",
  "konu": "Karekökün yaklaşık değeri",
  "zorluk": "Orta",
  "q": "<p>Bir bisikletli, şekildeki rotada A noktasından B noktasına, oradan da C noktasına gidiyor.</p><div class=\"fig\"><svg viewBox=\"0 0 540 190\" width=\"540\" role=\"img\" aria-label=\"Bisiklet rotası: A dan B ye kök 40 km, B den C ye kök 10 km\">\n    <path d=\"M60 140 Q 180 60 300 120 T 480 70\" fill=\"none\" stroke=\"var(--fig-stroke)\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n    <circle cx=\"60\" cy=\"140\" r=\"16\" fill=\"var(--accent)\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" style=\"fill:#fff\">A</text><circle cx=\"300\" cy=\"120\" r=\"16\" fill=\"var(--accent)\"/><text x=\"300\" y=\"126\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" style=\"fill:#fff\">B</text><circle cx=\"480\" cy=\"70\" r=\"16\" fill=\"var(--accent)\"/><text x=\"480\" y=\"76\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" style=\"fill:#fff\">C</text>\n    <text x=\"170\" y=\"70\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" >√<tspan style=\"text-decoration:overline\">40</tspan> km</text><text x=\"400\" y=\"70\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" >√<tspan style=\"text-decoration:overline\">10</tspan> km</text>\n    <rect x=\"365\" y=\"128\" width=\"20\" height=\"10\" rx=\"2\" fill=\"var(--fig-blue)\"/><circle cx=\"369\" cy=\"141\" r=\"5\" fill=\"var(--fig-stroke)\"/><circle cx=\"381\" cy=\"141\" r=\"5\" fill=\"var(--fig-stroke)\"/>\n    <text x=\"270\" y=\"180\" text-anchor=\"middle\" font-size=\"14\" style=\"fill:var(--muted)\">Bisiklet rotası: A → B → C</text></svg></div><p class=\"ask\">Bisikletlinin gittiği toplam yol kaç km ile kaç km arasındadır?</p>",
  "opts": [
   "7 ile 8",
   "8 ile 9",
   "9 ile 10",
   "10 ile 11"
  ],
  "ans": 2,
  "long": false,
  "hints": [
   "<span class=\"kok\">√<span>40</span></span>'ı a<span class=\"kok\">√<span>10</span></span> biçiminde yaz; sonra <span class=\"kok\">√<span>10</span></span>'larla toplama yap."
  ],
  "steps": [
   "<span class=\"kok\">√<span>40</span></span> = <span class=\"kok\">√<span>4 · 10</span></span> = 2<span class=\"kok\">√<span>10</span></span>",
   "2<span class=\"kok\">√<span>10</span></span> + <span class=\"kok\">√<span>10</span></span> = 3<span class=\"kok\">√<span>10</span></span> = <span class=\"kok\">√<span>9 · 10</span></span> = <span class=\"kok\">√<span>90</span></span>",
   "81 < 90 < 100 → 9 < <span class=\"kok\">√<span>90</span></span> < 10 → <b>9 ile 10</b> km arası"
  ],
  "answer": "Cevap: <b>C</b>",
  "celdirici": {
   "0": "Kök içlerini toplamak: <span class=\"kok\">√<span>40</span></span> + <span class=\"kok\">√<span>10</span></span> = <span class=\"kok\">√<span>50</span></span> (7 ile 8 arası). Kök içleri toplanmaz.",
   "1": "Kökleri aşağı yuvarlayıp (6 ve 3) toplamı olan 9'u üst sınır sanmak.",
   "3": "Kökleri yukarı yuvarlayıp (7 ve 4) toplamı olan 11'i üst sınır almak."
  },
  "trap": ""
 },
 {
  "unite": "Kareköklü İfadeler",
  "kazanim": "M.8.1.3.7",
  "kazanimMetni": "Ondalık ifadelerin ve rasyonel sayıların kareköklerini belirler.",
  "konu": "Ondalık ve rasyonel sayıların karekökü",
  "zorluk": "Zor",
  "q": "<p>Bir mozaik panoda eş kare taşlar, şekildeki gibi bir sıra hâlinde boşluksuz olarak dizilmiştir.</p><div class=\"fig\"><svg viewBox=\"0 0 560 170\" width=\"560\" role=\"img\" aria-label=\"Yan yana dizilmiş 12 kare mozaik taşı; bir taşın alanı 0,0081 metrekare\"><rect x=\"20\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-blue)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"63\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"106\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-red)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"149\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-blue)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"192\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"235\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-red)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"278\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-blue)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"321\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"364\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-red)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"407\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-blue)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"450\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><rect x=\"493\" y=\"40\" width=\"43\" height=\"43\" fill=\"var(--fig-red)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><line x1=\"41\" y1=\"92\" x2=\"70\" y2=\"125\" stroke=\"var(--muted)\"/><text x=\"110\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" >Bir taşın alanı: 0,0081 m²</text><line x1=\"20\" y1=\"22\" x2=\"536\" y2=\"22\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"536,22 526.8,18.1 526.8,25.9\" fill=\"var(--fig-stroke)\"/><polygon points=\"20,22 29.2,25.9 29.2,18.1\" fill=\"var(--fig-stroke)\"/><text x=\"400\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" >12 taş · uzunluk ? cm</text></svg></div><p class=\"ask\">Bu sıranın uzunluğu kaç santimetredir?</p>",
  "opts": [
   "1,08",
   "9,72",
   "10,8",
   "108"
  ],
  "ans": 3,
  "long": false,
  "hints": [
   "<span class=\"kok\">√<span>0,0081</span></span>: 81'in kökü 9; virgülden sonra kaç basamak olmalı?",
   "1 m = 100 cm"
  ],
  "steps": [
   "<span class=\"kok\">√<span>0,0081</span></span> = 0,09 (çünkü 0,09 · 0,09 = 0,0081) → bir taşın kenarı 0,09 m",
   "0,09 m = 9 cm",
   "12 taş: 12 · 9 = <b>108 cm</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "celdirici": {
   "0": "Sonucu metre olarak bırakmak: 12 · 0,09 = 1,08 m.",
   "1": "Karekök almadan alanı 12 ile çarpmak (0,0972) ve sonucu 100 ile çarpmak.",
   "2": "<span class=\"kok\">√<span>0,0081</span></span>'i 0,009 sanmak: 12 · 0,009 = 0,108 m = 10,8 cm."
  },
  "trap": ""
 },
 {
  "unite": "Kareköklü İfadeler",
  "kazanim": "M.8.1.3.2",
  "kazanimMetni": "Tam kare olmayan kareköklü bir ifadenin hangi iki doğal sayı arasında olduğunu belirler.",
  "konu": "Karekökün yaklaşık değeri",
  "zorluk": "Çok zor",
  "q": "<p>Kare şeklindeki bir alanın ortasına, kenarları tam metre olan kare bir havuz yapılacaktır. Havuzun her kenarı ile alanın kenarı arasında <b>en az 1 m</b> genişliğinde yürüme yolu kalmalıdır.</p><div class=\"fig\"><svg viewBox=\"0 0 340 300\" width=\"340\" role=\"img\" aria-label=\"Alanı 200 metrekare olan kare alanın ortasında kare havuz; havuzun her yanında en az 1 metre yol\">\n    <rect x=\"40\" y=\"20\" width=\"240\" height=\"240\" fill=\"#bfe3a6\" stroke=\"var(--fig-stroke)\" stroke-width=\"2.5\"/>\n    <rect x=\"80\" y=\"60\" width=\"160\" height=\"160\" fill=\"var(--fig-blue)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/>\n    <text x=\"160\" y=\"135\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"700\" style=\"fill:#1f2328\">Havuz</text><text x=\"160\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" style=\"fill:#1f2328\">(kenarı tam metre)</text>\n    <line x1=\"40\" y1=\"40\" x2=\"80\" y2=\"40\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"80,40 70.8,36.1 70.8,43.9\" fill=\"var(--fig-stroke)\"/><polygon points=\"40,40 49.2,43.9 49.2,36.1\" fill=\"var(--fig-stroke)\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" >≥1 m</text>\n    <line x1=\"240\" y1=\"240\" x2=\"280\" y2=\"240\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"280,240 270.8,236.1 270.8,243.9\" fill=\"var(--fig-stroke)\"/><polygon points=\"240,240 249.2,243.9 249.2,236.1\" fill=\"var(--fig-stroke)\"/><text x=\"260\" y=\"255\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" >≥1 m</text>\n    <text x=\"160\" y=\"290\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >Kare alan: 200 m²</text></svg></div><p class=\"ask\">Havuz olabildiğince büyük yapılırsa, alanın havuz dışında kalan kısmı kaç m<sup>2</sup> olur?</p>",
  "opts": [
   "79",
   "56",
   "31",
   "4"
  ],
  "ans": 1,
  "long": false,
  "hints": [
   "Alanın kenarı <span class=\"kok\">√<span>200</span></span> m. Havuzun kenarı, bundan iki yandaki yollar kadar kısa olmalı.",
   "<span class=\"kok\">√<span>200</span></span> hangi iki doğal sayı arasında?"
  ],
  "steps": [
   "Alanın kenarı <span class=\"kok\">√<span>200</span></span>: 196 < 200 < 225 → 14 < <span class=\"kok\">√<span>200</span></span> < 15",
   "Havuz kenarı ≤ <span class=\"kok\">√<span>200</span></span> − 2 (iki yanda 1'er m) → 12 < <span class=\"kok\">√<span>200</span></span> − 2 < 13 → en fazla 12 m",
   "Havuz alanı 12² = 144 m²",
   "Kalan: 200 − 144 = <b>56 m²</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "celdirici": {
   "0": "<span class=\"kok\">√<span>200</span></span>'ü 13 alıp 2 çıkarmak: 11² = 121 → 79. <span class=\"kok\">√<span>200</span></span>, 14'ten büyüktür.",
   "2": "Yolu yalnızca bir tarafta bırakmak: havuz 13 m → 200 − 169 = 31.",
   "3": "Yürüme yolunu unutmak: havuz 14 m → 200 − 196 = 4."
  },
  "trap": "“Her kenarda” 1 m yol, havuzun kenarını <b>2 m</b> kısaltır: bir yanda 1 m, karşı yanda 1 m."
 }
];
