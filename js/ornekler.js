// Vitrindeki ücretsiz örnek sorular (Üslü İfadeler paketinden 4 soru: her zorluktan bir tane).
// Bu dosya benim-projem deposundaki soru havuzundan üretilir; paketin geri kalanı burada yer almaz.
window.ORNEKLER = [
 {
  "no": 1,
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
  "no": 2,
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
  "no": 3,
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
  "no": 4,
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
 }
];
