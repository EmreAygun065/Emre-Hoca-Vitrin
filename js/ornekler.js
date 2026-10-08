// Vitrindeki ücretsiz örnek sorular: her paketten 4 soru (her zorluktan bir tane).
// Bu dosya benim-projem deposundaki soru havuzundan üretilir; paketlerin geri kalanı burada yer almaz.
window.ORNEKLER = [
 {
  "unite": "Çarpanlar ve Katlar",
  "kazanim": "M.8.1.1.2",
  "kazanimMetni": "İki doğal sayının en büyük ortak bölenini (EBOB) ve en küçük ortak katını (EKOK) hesaplar, ilgili problemleri çözer.",
  "konu": "EBOB ve EKOK",
  "zorluk": "Kolay",
  "q": "<p>Uzunlukları 30 cm ve 18 cm olan iki tahta çıta, hiç artmayacak şekilde eşit uzunlukta ve mümkün olan en uzun parçalara kesilecektir.</p><p class=\"ask\">Bir parçanın uzunluğu kaç cm olur?</p>",
  "opts": [
   "90",
   "8",
   "6",
   "3"
  ],
  "ans": 2,
  "hints": [
   "En uzun ortak parça: EBOB"
  ],
  "steps": [
   "EBOB(30, 18) = 6 cm",
   "Parça uzunluğu: <b>6 cm</b>"
  ],
  "answer": "Cevap: <b>C</b>",
  "celdirici": {
   "0": "EKOK'u bulmak; parça uzunluğu iki uzunluğu da bölmelidir.",
   "1": "Parça sayısını uzunluk sanmak.",
   "3": "Ortak bölendir ama en büyüğü değildir."
  }
 },
 {
  "unite": "Çarpanlar ve Katlar",
  "kazanim": "M.8.1.1.3",
  "kazanimMetni": "Verilen iki doğal sayının aralarında asal olup olmadığını belirler.",
  "konu": "Aralarında asal sayılar",
  "zorluk": "Orta",
  "q": "<p class=\"ask\">Aşağıdaki sayı ikililerinden hangisi aralarında asal <u>değildir</u>?</p>",
  "opts": [
   "44 ve 52",
   "28 ve 29",
   "36 ve 55",
   "28 ve 33"
  ],
  "ans": 0,
  "hints": [
   "Aralarında asal sayıların 1'den başka ortak böleni yoktur."
  ],
  "steps": [
   "44 = 2<sup>2</sup> · 11, 52 = 2<sup>2</sup> · 13",
   "EBOB(44, 52) = 4 → <b>44 ve 52</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "celdirici": {
   "1": "28 ve 29 sayılarının 1'den başka ortak böleni yoktur; aralarında asaldır.",
   "2": "36 ve 55 sayılarının 1'den başka ortak böleni yoktur; aralarında asaldır.",
   "3": "28 ve 33 sayılarının 1'den başka ortak böleni yoktur; aralarında asaldır."
  }
 },
 {
  "unite": "Çarpanlar ve Katlar",
  "kazanim": "M.8.1.1.2",
  "kazanimMetni": "İki doğal sayının en büyük ortak bölenini (EBOB) ve en küçük ortak katını (EKOK) hesaplar, ilgili problemleri çözer.",
  "konu": "EBOB ve EKOK",
  "zorluk": "Zor",
  "q": "<p>Uzunlukları şekilde verilen iki kurdele, hiç artmayacak şekilde eşit uzunlukta ve mümkün olan en uzun parçalara kesilecektir.</p><div class=\"fig\"><svg viewBox=\"0 0 520 140\" width=\"520\" role=\"img\" aria-label=\"Kurdeleler: 84 santimetre ve 126 santimetre\"><rect x=\"30\" y=\"30\" width=\"336\" height=\"22\" fill=\"#e8508a\" stroke=\"var(--fig-stroke)\"/><text x=\"198\" y=\"22\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >84 cm</text>\n    <rect x=\"30\" y=\"90\" width=\"504\" height=\"22\" fill=\"var(--fig-blue)\" stroke=\"var(--fig-stroke)\" transform=\"scale(.94 1)\"/><text x=\"255\" y=\"84\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >126 cm</text></svg></div><p class=\"ask\">Toplam kaç parça elde edilir?</p>",
  "opts": [
   "42",
   "5",
   "3",
   "10"
  ],
  "ans": 1,
  "hints": [
   "Parça uzunluğu iki uzunluğun da böleni ve mümkün olan en büyük değer: EBOB."
  ],
  "steps": [
   "84 = 2² · 3 · 7, 126 = 2 · 3² · 7 → EBOB = 2 · 3 · 7 = 42",
   "Parça sayısı: 84 : 42 + 126 : 42 = 2 + 3 = <b>5</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "celdirici": {
   "0": "Parça uzunluğunu parça sayısı sanmak.",
   "2": "Yalnızca uzun kurdelenin parça sayısını bulmak.",
   "3": "En uzun parça yerine 21 cm almak: 4 + 6 = 10."
  }
 },
 {
  "unite": "Çarpanlar ve Katlar",
  "kazanim": "M.8.1.1.2",
  "kazanimMetni": "İki doğal sayının en büyük ortak bölenini (EBOB) ve en küçük ortak katını (EKOK) hesaplar, ilgili problemleri çözer.",
  "konu": "EBOB ve EKOK",
  "zorluk": "Çok zor",
  "q": "<p>Birbirine geçmiş iki çarktan A'da 24, B'de 36 diş vardır. Başlangıçta kırmızı noktayla işaretli dişler karşı karşıyadır.</p><div class=\"fig\"><svg viewBox=\"0 0 520 230\" width=\"520\" role=\"img\" aria-label=\"Birbirine geçen iki çark: A 24 dişli, B 36 dişli\"><path d=\"M218.0 100.0 L209.5 107.8 L215.7 117.6 L205.4 123.0 L208.9 134.0 L197.6 136.5 L198.1 148.1 L186.5 147.6 L184.0 158.9 L173.0 155.4 L167.6 165.7 L157.8 159.5 L150.0 168.0 L142.2 159.5 L132.4 165.7 L127.0 155.4 L116.0 158.9 L113.5 147.6 L101.9 148.1 L102.4 136.5 L91.1 134.0 L94.6 123.0 L84.3 117.6 L90.5 107.8 L82.0 100.0 L90.5 92.2 L84.3 82.4 L94.6 77.0 L91.1 66.0 L102.4 63.5 L101.9 51.9 L113.5 52.4 L116.0 41.1 L127.0 44.6 L132.4 34.3 L142.2 40.5 L150.0 32.0 L157.8 40.5 L167.6 34.3 L173.0 44.6 L184.0 41.1 L186.5 52.4 L198.1 51.9 L197.6 63.5 L208.9 66.0 L205.4 77.0 L215.7 82.4 L209.5 92.2 Z\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><circle cx=\"150\" cy=\"100\" r=\"21\" fill=\"var(--bg, #fff)\" stroke=\"var(--fig-stroke)\"/><text x=\"150\" y=\"194\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >A: 24 diş</text><path d=\"M438.0 100.0 L429.7 107.4 L436.6 116.1 L427.1 122.0 L432.4 131.8 L422.0 135.9 L425.5 146.5 L414.6 148.8 L416.2 159.8 L405.1 160.1 L404.8 171.2 L393.8 169.6 L391.5 180.5 L380.9 177.0 L376.8 187.4 L367.0 182.1 L361.1 191.6 L352.4 184.7 L345.0 193.0 L337.6 184.7 L328.9 191.6 L323.0 182.1 L313.2 187.4 L309.1 177.0 L298.5 180.5 L296.2 169.6 L285.2 171.2 L284.9 160.1 L273.8 159.8 L275.4 148.8 L264.5 146.5 L268.0 135.9 L257.6 131.8 L262.9 122.0 L253.4 116.1 L260.3 107.4 L252.0 100.0 L260.3 92.6 L253.4 83.9 L262.9 78.0 L257.6 68.2 L268.0 64.1 L264.5 53.5 L275.4 51.2 L273.8 40.2 L284.9 39.9 L285.2 28.8 L296.2 30.4 L298.5 19.5 L309.1 23.0 L313.2 12.6 L323.0 17.9 L328.9 8.4 L337.6 15.3 L345.0 7.0 L352.4 15.3 L361.1 8.4 L367.0 17.9 L376.8 12.6 L380.9 23.0 L391.5 19.5 L393.8 30.4 L404.8 28.8 L405.1 39.9 L416.2 40.2 L414.6 51.2 L425.5 53.5 L422.0 64.1 L432.4 68.2 L427.1 78.0 L436.6 83.9 L429.7 92.6 Z\" fill=\"var(--blue-soft)\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.5\"/><circle cx=\"345\" cy=\"100\" r=\"29.749999999999996\" fill=\"var(--bg, #fff)\" stroke=\"var(--fig-stroke)\"/><text x=\"345\" y=\"219\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >B: 36 diş</text><circle cx=\"214\" cy=\"100\" r=\"6\" fill=\"var(--red)\"/></svg></div><p class=\"ask\">İşaretli dişlerin ilk kez yeniden karşılaşması için A çarkı en az kaç tur dönmelidir?</p>",
  "opts": [
   "6",
   "2",
   "3",
   "72"
  ],
  "ans": 2,
  "hints": [
   "Karşılaşma için geçen diş sayısı her iki çarkın diş sayısının katı olmalı: EKOK."
  ],
  "steps": [
   "EKOK(24, 36) = 72 diş",
   "A çarkı: 72 : 24 = <b>3</b> tur (B çarkı 2 tur)"
  ],
  "answer": "Cevap: <b>C</b>",
  "celdirici": {
   "0": "EBOB'u (12) kullanmak ve 72 : 12 yazmak.",
   "1": "B çarkının tur sayısını vermek.",
   "3": "Geçen diş sayısını tur sayısı sanmak."
  }
 },
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
 },
 {
  "unite": "Veri Analizi",
  "kazanim": "M.8.4.1.1",
  "kazanimMetni": "En fazla üç veri grubuna ait çizgi ve sütun grafiklerini yorumlar.",
  "konu": "Çizgi ve sütun grafikleri",
  "zorluk": "Kolay",
  "q": "<p>Bir bahçeden bir haftada toplanan sebzelerin miktarları aşağıdaki sütun grafiğinde verilmiştir.</p><div class=\"fig\"><svg viewBox=\"0 0 460 284\" width=\"460\" role=\"img\" aria-label=\"Sütun grafiği: Bahçeden Toplanan Sebzeler\" style=\"max-width:100%;height:auto\"><text x=\"230\" y=\"16\" text-anchor=\"middle\" font-size=\"13\"><tspan font-weight=\"700\">Grafik:</tspan> Bahçeden Toplanan Sebzeler</text><text x=\"46\" y=\"250\" text-anchor=\"end\" font-size=\"11.5\">0</text><line x1=\"52\" y1=\"246\" x2=\"52\" y2=\"42\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"52,42 48.9,49.4 55.1,49.4\" fill=\"var(--fig-stroke)\"/><line x1=\"52\" y1=\"246\" x2=\"377.2\" y2=\"246\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"377.2,246 369.8,242.9 369.8,249.1\" fill=\"var(--fig-stroke)\"/><text x=\"48\" y=\"38\" font-size=\"12\">Miktar (kg)</text><text x=\"381.2\" y=\"250\" font-size=\"12\">Sebzeler</text><text x=\"82.7\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">Domates</text><text x=\"144.2\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">Kabak</text><text x=\"205.6\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">Patlıcan</text><text x=\"267\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">Fasulye</text><text x=\"328.5\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">Biber</text><rect class=\"bar\" x=\"65.7\" y=\"214.3\" width=\"34\" height=\"31.7\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"127.2\" y=\"71.8\" width=\"34\" height=\"174.2\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"188.6\" y=\"151\" width=\"34\" height=\"95\" fill=\"#86cf7e\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"250\" y=\"182.7\" width=\"34\" height=\"63.3\" fill=\"#ef8fae\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"311.5\" y=\"103.5\" width=\"34\" height=\"142.5\" fill=\"#b9a3ec\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><line x1=\"52\" y1=\"214.3\" x2=\"65.7\" y2=\"214.3\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"46\" y=\"218.3\" text-anchor=\"end\" font-size=\"11.5\">10</text><line x1=\"52\" y1=\"182.7\" x2=\"250\" y2=\"182.7\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"46\" y=\"186.7\" text-anchor=\"end\" font-size=\"11.5\">20</text><line x1=\"52\" y1=\"151\" x2=\"188.6\" y2=\"151\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"46\" y=\"155\" text-anchor=\"end\" font-size=\"11.5\">30</text><line x1=\"52\" y1=\"103.5\" x2=\"311.5\" y2=\"103.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"46\" y=\"107.5\" text-anchor=\"end\" font-size=\"11.5\">45</text><line x1=\"52\" y1=\"71.8\" x2=\"127.2\" y2=\"71.8\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"46\" y=\"75.8\" text-anchor=\"end\" font-size=\"11.5\">55</text></svg></div><p class=\"ask\">Kabak ile Biber değerleri arasındaki fark kaçtır?</p>",
  "opts": [
   "45",
   "10",
   "55",
   "100"
  ],
  "ans": 1,
  "hints": [
   "İki sütunun değerini okuyup büyükten küçüğü çıkar."
  ],
  "steps": [
   "Kabak: 55, Biber: 45",
   "Fark: <b>10</b>"
  ],
  "answer": "Cevap: <b>B</b>",
  "celdirici": {
   "0": "Küçük değeri cevap sanmak.",
   "2": "Büyük değeri cevap sanmak.",
   "3": "Farkı değil toplamı bulmak."
  }
 },
 {
  "unite": "Veri Analizi",
  "kazanim": "M.8.4.1.2",
  "kazanimMetni": "Verileri sütun, daire veya çizgi grafiği ile gösterir ve bu gösterimler arasında uygun olan dönüşümleri yapar.",
  "konu": "Grafikler arası dönüşüm",
  "zorluk": "Orta",
  "q": "<p>Bir kadın kooperatifinin ürettiği kavanozların ürünlere göre dağılımı aşağıdaki daire grafiğinde gösterilmiştir. Grafik toplam 288 kavanoz için çizilmiştir.</p><div class=\"fig\"><svg viewBox=\"0 0 380 266\" width=\"380\" role=\"img\" aria-label=\"Daire grafiği: Kooperatifin Ürettiği Reçeller\" style=\"max-width:100%;height:auto\"><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-size=\"13\"><tspan font-weight=\"700\">Grafik:</tspan> Kooperatifin Ürettiği Reçeller</text><path class=\"dilim\" d=\"M190 144 L190 56 A88 88 0 0 1 278 144 Z\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.4\"/><path class=\"dilim\" d=\"M190 144 L278 144 A88 88 0 0 1 205.3 230.7 Z\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.4\"/><path class=\"dilim\" d=\"M190 144 L205.3 230.7 A88 88 0 1 1 190 56 Z\" fill=\"#86cf7e\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.4\"/><text x=\"258.6\" y=\"72.4\" text-anchor=\"start\" font-size=\"12\" font-weight=\"600\">Pekmez</text><path d=\"M190 135 L199 135 L199 144\" fill=\"none\" stroke=\"#1f2328\" stroke-width=\"1.2\"/><text x=\"264.3\" y=\"218.4\" text-anchor=\"start\" font-size=\"12\" font-weight=\"600\">Salça</text><path d=\"M202 144 A12 12 0 0 1 192.1 155.8\" fill=\"none\" stroke=\"#1f2328\" stroke-width=\"1.2\"/><text x=\"223.7\" y=\"176.3\" text-anchor=\"middle\" font-size=\"11.5\" style=\"fill:#1f2328\">80°</text><text x=\"93.4\" y=\"156.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"600\">Turşu</text><path d=\"M192.1 155.8 A12 12 0 1 1 190 132\" fill=\"none\" stroke=\"#1f2328\" stroke-width=\"1.2\"/><text x=\"146.2\" y=\"151.8\" text-anchor=\"middle\" font-size=\"11.5\" style=\"fill:#1f2328\">190°</text></svg></div><p class=\"ask\">Bu verileri gösteren sütun grafiği aşağıdakilerden hangisidir?</p>",
  "opts": [
   "<div class=\"fig\"><svg viewBox=\"0 0 250 172\" width=\"195\" role=\"img\" aria-label=\"Sütun grafiği: \" style=\"max-width:100%;height:auto\"><text x=\"32\" y=\"146\" text-anchor=\"end\" font-size=\"10\">0</text><line x1=\"38\" y1=\"142\" x2=\"38\" y2=\"-2\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"38,-2 34.9,5.4 41.1,5.4\" fill=\"var(--fig-stroke)\"/><line x1=\"38\" y1=\"142\" x2=\"240\" y2=\"142\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"240,142 232.6,138.9 232.6,145.1\" fill=\"var(--fig-stroke)\"/><text x=\"69.7\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Pekmez</text><text x=\"133\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Salça</text><text x=\"196.3\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Turşu</text><rect class=\"bar\" x=\"58.7\" y=\"83.5\" width=\"22\" height=\"58.5\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"122\" y=\"18.5\" width=\"22\" height=\"123.5\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"185.3\" y=\"90\" width=\"22\" height=\"52\" fill=\"#86cf7e\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><line x1=\"38\" y1=\"90\" x2=\"185.3\" y2=\"90\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"94\" text-anchor=\"end\" font-size=\"10\">64</text><line x1=\"38\" y1=\"83.5\" x2=\"58.7\" y2=\"83.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><line x1=\"38\" y1=\"18.5\" x2=\"122\" y2=\"18.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"22.5\" text-anchor=\"end\" font-size=\"10\">152</text></svg></div>",
   "<div class=\"fig\"><svg viewBox=\"0 0 250 172\" width=\"195\" role=\"img\" aria-label=\"Sütun grafiği: \" style=\"max-width:100%;height:auto\"><text x=\"32\" y=\"146\" text-anchor=\"end\" font-size=\"10\">0</text><line x1=\"38\" y1=\"142\" x2=\"38\" y2=\"-2\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"38,-2 34.9,5.4 41.1,5.4\" fill=\"var(--fig-stroke)\"/><line x1=\"38\" y1=\"142\" x2=\"240\" y2=\"142\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"240,142 232.6,138.9 232.6,145.1\" fill=\"var(--fig-stroke)\"/><text x=\"69.7\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Pekmez</text><text x=\"133\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Salça</text><text x=\"196.3\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Turşu</text><rect class=\"bar\" x=\"58.7\" y=\"83.5\" width=\"22\" height=\"58.5\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"122\" y=\"90\" width=\"22\" height=\"52\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"185.3\" y=\"18.5\" width=\"22\" height=\"123.5\" fill=\"#86cf7e\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><line x1=\"38\" y1=\"90\" x2=\"122\" y2=\"90\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"94\" text-anchor=\"end\" font-size=\"10\">64</text><line x1=\"38\" y1=\"83.5\" x2=\"58.7\" y2=\"83.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><line x1=\"38\" y1=\"18.5\" x2=\"185.3\" y2=\"18.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"22.5\" text-anchor=\"end\" font-size=\"10\">152</text></svg></div>",
   "<div class=\"fig\"><svg viewBox=\"0 0 250 172\" width=\"195\" role=\"img\" aria-label=\"Sütun grafiği: \" style=\"max-width:100%;height:auto\"><text x=\"32\" y=\"146\" text-anchor=\"end\" font-size=\"10\">0</text><line x1=\"38\" y1=\"142\" x2=\"38\" y2=\"-2\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"38,-2 34.9,5.4 41.1,5.4\" fill=\"var(--fig-stroke)\"/><line x1=\"38\" y1=\"142\" x2=\"240\" y2=\"142\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"240,142 232.6,138.9 232.6,145.1\" fill=\"var(--fig-stroke)\"/><text x=\"69.7\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Pekmez</text><text x=\"133\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Salça</text><text x=\"196.3\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Turşu</text><rect class=\"bar\" x=\"58.7\" y=\"83.5\" width=\"22\" height=\"58.5\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"122\" y=\"90\" width=\"22\" height=\"52\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"185.3\" y=\"18.5\" width=\"22\" height=\"123.5\" fill=\"#86cf7e\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><line x1=\"38\" y1=\"90\" x2=\"122\" y2=\"90\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"94\" text-anchor=\"end\" font-size=\"10\">80</text><line x1=\"38\" y1=\"83.5\" x2=\"58.7\" y2=\"83.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><line x1=\"38\" y1=\"18.5\" x2=\"185.3\" y2=\"18.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"22.5\" text-anchor=\"end\" font-size=\"10\">190</text></svg></div>",
   "<div class=\"fig\"><svg viewBox=\"0 0 250 172\" width=\"195\" role=\"img\" aria-label=\"Sütun grafiği: \" style=\"max-width:100%;height:auto\"><text x=\"32\" y=\"146\" text-anchor=\"end\" font-size=\"10\">0</text><line x1=\"38\" y1=\"142\" x2=\"38\" y2=\"-2\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"38,-2 34.9,5.4 41.1,5.4\" fill=\"var(--fig-stroke)\"/><line x1=\"38\" y1=\"142\" x2=\"240\" y2=\"142\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"240,142 232.6,138.9 232.6,145.1\" fill=\"var(--fig-stroke)\"/><text x=\"69.7\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Pekmez</text><text x=\"133\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Salça</text><text x=\"196.3\" y=\"156\" text-anchor=\"middle\" font-size=\"10\">Turşu</text><rect class=\"bar\" x=\"58.7\" y=\"90\" width=\"22\" height=\"52\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"122\" y=\"83.5\" width=\"22\" height=\"58.5\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><rect class=\"bar\" x=\"185.3\" y=\"18.5\" width=\"22\" height=\"123.5\" fill=\"#86cf7e\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><line x1=\"38\" y1=\"90\" x2=\"58.7\" y2=\"90\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"94\" text-anchor=\"end\" font-size=\"10\">64</text><line x1=\"38\" y1=\"83.5\" x2=\"122\" y2=\"83.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><line x1=\"38\" y1=\"18.5\" x2=\"185.3\" y2=\"18.5\" stroke=\"var(--fig-stroke)\" stroke-dasharray=\"3 3\" stroke-opacity=\".7\"/><text x=\"32\" y=\"22.5\" text-anchor=\"end\" font-size=\"10\">152</text></svg></div>"
  ],
  "ans": 1,
  "hints": [
   "1° kaç birime karşılık geliyor?"
  ],
  "steps": [
   "Değer = açı / 360 · 288",
   "Pekmez: 72, Salça: 64, Turşu: 152"
  ],
  "answer": "Cevap: <b>B</b>",
  "celdirici": {
   "0": "Salça ile Turşu değerlerini karıştırmak.",
   "2": "Açıları değer sanmak.",
   "3": "Pekmez ile Salça değerlerini karıştırmak."
  },
  "long": true
 },
 {
  "unite": "Veri Analizi",
  "kazanim": "M.8.4.1.1",
  "kazanimMetni": "En fazla üç veri grubuna ait çizgi ve sütun grafiklerini yorumlar.",
  "konu": "Çizgi ve sütun grafikleri",
  "zorluk": "Zor",
  "q": "<p>Bir okulda yapılan iki deprem tatbikatında sınıfların binayı boşaltma süreleri aşağıdaki sütun grafiğinde verilmiştir.</p><div class=\"fig\"><svg viewBox=\"0 0 460 284\" width=\"460\" role=\"img\" aria-label=\"Sütun grafiği: Sınıfların Tahliye Süreleri\" style=\"max-width:100%;height:auto\"><text x=\"230\" y=\"16\" text-anchor=\"middle\" font-size=\"13\"><tspan font-weight=\"700\">Grafik:</tspan> Sınıfların Tahliye Süreleri</text><text x=\"46\" y=\"250\" text-anchor=\"end\" font-size=\"11.5\">0</text><line x1=\"52\" y1=\"214.3\" x2=\"277.2\" y2=\"214.3\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"218.3\" text-anchor=\"end\" font-size=\"11.5\">30</text><line x1=\"52\" y1=\"182.7\" x2=\"277.2\" y2=\"182.7\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"186.7\" text-anchor=\"end\" font-size=\"11.5\">60</text><line x1=\"52\" y1=\"151\" x2=\"277.2\" y2=\"151\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"155\" text-anchor=\"end\" font-size=\"11.5\">90</text><line x1=\"52\" y1=\"119.3\" x2=\"277.2\" y2=\"119.3\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"123.3\" text-anchor=\"end\" font-size=\"11.5\">120</text><line x1=\"52\" y1=\"87.7\" x2=\"277.2\" y2=\"87.7\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"91.7\" text-anchor=\"end\" font-size=\"11.5\">150</text><line x1=\"52\" y1=\"56\" x2=\"277.2\" y2=\"56\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"60\" text-anchor=\"end\" font-size=\"11.5\">180</text><line x1=\"52\" y1=\"246\" x2=\"52\" y2=\"42\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"52,42 48.9,49.4 55.1,49.4\" fill=\"var(--fig-stroke)\"/><line x1=\"52\" y1=\"246\" x2=\"295.2\" y2=\"246\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"295.2,246 287.8,242.9 287.8,249.1\" fill=\"var(--fig-stroke)\"/><text x=\"48\" y=\"38\" font-size=\"12\">Süre (saniye)</text><text x=\"299.2\" y=\"250\" font-size=\"12\">Sınıflar</text><text x=\"80.2\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">5-A</text><text x=\"136.5\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">6-A</text><text x=\"192.8\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">7-A</text><text x=\"249.1\" y=\"263\" text-anchor=\"middle\" font-size=\"12\">8-A</text><rect class=\"bar\" x=\"60.4\" y=\"87.7\" width=\"19.7\" height=\"158.3\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"70.3\" y=\"83.7\" text-anchor=\"middle\" font-size=\"11.5\">150</text><rect class=\"bar\" x=\"116.7\" y=\"56\" width=\"19.7\" height=\"190\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"126.6\" y=\"52\" text-anchor=\"middle\" font-size=\"11.5\">180</text><rect class=\"bar\" x=\"173\" y=\"103.5\" width=\"19.7\" height=\"142.5\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"182.9\" y=\"99.5\" text-anchor=\"middle\" font-size=\"11.5\">135</text><rect class=\"bar\" x=\"229.3\" y=\"71.8\" width=\"19.7\" height=\"174.2\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"239.2\" y=\"67.8\" text-anchor=\"middle\" font-size=\"11.5\">165</text><rect class=\"bar\" x=\"80.2\" y=\"119.3\" width=\"19.7\" height=\"126.7\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"90\" y=\"115.3\" text-anchor=\"middle\" font-size=\"11.5\">120</text><rect class=\"bar\" x=\"136.5\" y=\"98.2\" width=\"19.7\" height=\"147.8\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"146.3\" y=\"94.2\" text-anchor=\"middle\" font-size=\"11.5\">140</text><rect class=\"bar\" x=\"192.8\" y=\"114.1\" width=\"19.7\" height=\"131.9\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"202.6\" y=\"110.1\" text-anchor=\"middle\" font-size=\"11.5\">125</text><rect class=\"bar\" x=\"249\" y=\"108.8\" width=\"19.7\" height=\"137.2\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.2\"/><text x=\"258.9\" y=\"104.8\" text-anchor=\"middle\" font-size=\"11.5\">130</text><rect x=\"360\" y=\"56\" width=\"12\" height=\"12\" fill=\"#6cb8ea\" stroke=\"var(--fig-stroke)\"/><text x=\"377\" y=\"66.5\" font-size=\"12\">1. tatbikat</text><rect x=\"360\" y=\"76\" width=\"12\" height=\"12\" fill=\"#f5a65b\" stroke=\"var(--fig-stroke)\"/><text x=\"377\" y=\"86.5\" font-size=\"12\">2. tatbikat</text></svg></div><p>Okulun hedefi, her sınıfın ikinci tatbikatta tahliye süresini birinci tatbikata göre en az %15 kısaltmasıdır.</p><p class=\"ask\">Hedefe ulaşamayan sınıf ya da sınıflar hangileridir?</p>",
  "opts": [
   "Bütün sınıflar ulaşmıştır.",
   "5-A ve 7-A",
   "Yalnız 5-A",
   "Yalnız 7-A"
  ],
  "ans": 3,
  "hints": [
   "Her sınıfın süresindeki kısalmayı birinci tatbikattaki süreye böl."
  ],
  "steps": [
   "5-A: 30 : 150 = %20, 6-A: 40 : 180 ≈ %22, 7-A: 10 : 135 ≈ %7, 8-A: 35 : 165 ≈ %21",
   "%15'in altında kalan: <b>yalnız 7-A</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "celdirici": {
   "0": "7-A'nın kısalma oranını yanlış hesaplamak.",
   "1": "5-A'nın kısalmasını (30 sn) az görüp yüzdeye çevirmemek.",
   "2": "Saniye cinsinden en az kısaltan sınıfı aramak yerine en kısa süreye sahip sınıfı almak."
  },
  "long": true
 },
 {
  "unite": "Veri Analizi",
  "kazanim": "M.8.4.1.1",
  "kazanimMetni": "En fazla üç veri grubuna ait çizgi ve sütun grafiklerini yorumlar.",
  "konu": "Çizgi ve sütun grafikleri",
  "zorluk": "Çok zor",
  "q": "<p>Bir akvaryumdaki üç balık türünün aylara göre sayıları aşağıdaki çizgi grafiğinde verilmiştir.</p><div class=\"fig\"><svg viewBox=\"0 0 460 334\" width=\"460\" role=\"img\" aria-label=\"Çizgi grafiği: Akvaryumdaki Balık Sayıları\" style=\"max-width:100%;height:auto\"><text x=\"230\" y=\"16\" text-anchor=\"middle\" font-size=\"13\"><tspan font-weight=\"700\">Grafik:</tspan> Akvaryumdaki Balık Sayıları</text><text x=\"46\" y=\"300\" text-anchor=\"end\" font-size=\"11.5\">0</text><line x1=\"52\" y1=\"261.7\" x2=\"297\" y2=\"261.7\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"265.7\" text-anchor=\"end\" font-size=\"11.5\">10</text><line x1=\"52\" y1=\"227.4\" x2=\"297\" y2=\"227.4\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"231.4\" text-anchor=\"end\" font-size=\"11.5\">20</text><line x1=\"52\" y1=\"193.1\" x2=\"297\" y2=\"193.1\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"197.1\" text-anchor=\"end\" font-size=\"11.5\">30</text><line x1=\"52\" y1=\"158.9\" x2=\"297\" y2=\"158.9\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"162.9\" text-anchor=\"end\" font-size=\"11.5\">40</text><line x1=\"52\" y1=\"124.6\" x2=\"297\" y2=\"124.6\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"128.6\" text-anchor=\"end\" font-size=\"11.5\">50</text><line x1=\"52\" y1=\"90.3\" x2=\"297\" y2=\"90.3\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"94.3\" text-anchor=\"end\" font-size=\"11.5\">60</text><line x1=\"52\" y1=\"56\" x2=\"297\" y2=\"56\" stroke=\"var(--fig-stroke)\" stroke-opacity=\".18\"/><text x=\"46\" y=\"60\" text-anchor=\"end\" font-size=\"11.5\">70</text><line x1=\"52\" y1=\"296\" x2=\"52\" y2=\"42\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"52,42 48.9,49.4 55.1,49.4\" fill=\"var(--fig-stroke)\"/><line x1=\"52\" y1=\"296\" x2=\"315\" y2=\"296\" stroke=\"var(--fig-stroke)\" stroke-width=\"1.6\"/><polygon points=\"315,296 307.6,292.9 307.6,299.1\" fill=\"var(--fig-stroke)\"/><text x=\"48\" y=\"38\" font-size=\"12\">Balık sayısı</text><text x=\"319\" y=\"300\" font-size=\"12\">Aylar</text><text x=\"82.6\" y=\"313\" text-anchor=\"middle\" font-size=\"12\">Ocak</text><text x=\"143.9\" y=\"313\" text-anchor=\"middle\" font-size=\"12\">Şubat</text><text x=\"205.1\" y=\"313\" text-anchor=\"middle\" font-size=\"12\">Mart</text><text x=\"266.4\" y=\"313\" text-anchor=\"middle\" font-size=\"12\">Nisan</text><polyline points=\"82.6,261.7 143.9,254.9 205.1,244.6 266.4,244.6\" fill=\"none\" stroke=\"#2f7fc1\" stroke-width=\"2.4\" /><circle class=\"nokta\" cx=\"82.6\" cy=\"261.7\" r=\"4\" fill=\"#2f7fc1\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"82.6\" y=\"253.7\" text-anchor=\"middle\" font-size=\"11.5\">10</text><circle class=\"nokta\" cx=\"143.9\" cy=\"254.9\" r=\"4\" fill=\"#2f7fc1\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"143.9\" y=\"246.9\" text-anchor=\"middle\" font-size=\"11.5\">12</text><circle class=\"nokta\" cx=\"205.1\" cy=\"244.6\" r=\"4\" fill=\"#2f7fc1\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"205.1\" y=\"236.6\" text-anchor=\"middle\" font-size=\"11.5\">15</text><circle class=\"nokta\" cx=\"266.4\" cy=\"244.6\" r=\"4\" fill=\"#2f7fc1\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"266.4\" y=\"236.6\" text-anchor=\"middle\" font-size=\"11.5\">15</text><polyline points=\"82.6,227.4 143.9,176 205.1,124.6 266.4,56\" fill=\"none\" stroke=\"#d9622b\" stroke-width=\"2.4\" stroke-dasharray=\"7 4\"/><circle class=\"nokta\" cx=\"82.6\" cy=\"227.4\" r=\"4\" fill=\"#d9622b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"82.6\" y=\"219.4\" text-anchor=\"middle\" font-size=\"11.5\">20</text><circle class=\"nokta\" cx=\"143.9\" cy=\"176\" r=\"4\" fill=\"#d9622b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"143.9\" y=\"168\" text-anchor=\"middle\" font-size=\"11.5\">35</text><circle class=\"nokta\" cx=\"205.1\" cy=\"124.6\" r=\"4\" fill=\"#d9622b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"205.1\" y=\"116.6\" text-anchor=\"middle\" font-size=\"11.5\">50</text><circle class=\"nokta\" cx=\"266.4\" cy=\"56\" r=\"4\" fill=\"#d9622b\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"266.4\" y=\"48\" text-anchor=\"middle\" font-size=\"11.5\">70</text><polyline points=\"82.6,275.4 143.9,275.4 205.1,268.6 266.4,265.1\" fill=\"none\" stroke=\"#3d9a4a\" stroke-width=\"2.4\" stroke-dasharray=\"2 4\"/><circle class=\"nokta\" cx=\"82.6\" cy=\"275.4\" r=\"4\" fill=\"#3d9a4a\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"82.6\" y=\"292.4\" text-anchor=\"middle\" font-size=\"11.5\">6</text><circle class=\"nokta\" cx=\"143.9\" cy=\"275.4\" r=\"4\" fill=\"#3d9a4a\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"143.9\" y=\"267.4\" text-anchor=\"middle\" font-size=\"11.5\">6</text><circle class=\"nokta\" cx=\"205.1\" cy=\"268.6\" r=\"4\" fill=\"#3d9a4a\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"205.1\" y=\"260.6\" text-anchor=\"middle\" font-size=\"11.5\">8</text><circle class=\"nokta\" cx=\"266.4\" cy=\"265.1\" r=\"4\" fill=\"#3d9a4a\" stroke=\"var(--fig-stroke)\" stroke-width=\"1\"/><text x=\"266.4\" y=\"257.1\" text-anchor=\"middle\" font-size=\"11.5\">9</text><line x1=\"360\" y1=\"62\" x2=\"373\" y2=\"62\" stroke=\"#2f7fc1\" stroke-width=\"2.6\" /><text x=\"377\" y=\"66.5\" font-size=\"12\">Japon</text><line x1=\"360\" y1=\"82\" x2=\"373\" y2=\"82\" stroke=\"#d9622b\" stroke-width=\"2.6\" stroke-dasharray=\"7 4\"/><text x=\"377\" y=\"86.5\" font-size=\"12\">Lepistes</text><line x1=\"360\" y1=\"102\" x2=\"373\" y2=\"102\" stroke=\"#3d9a4a\" stroke-width=\"2.6\" stroke-dasharray=\"2 4\"/><text x=\"377\" y=\"106.5\" font-size=\"12\">Melek</text></svg></div><p class=\"ask\">Lepistes sayısının akvaryumdaki toplam balık sayısına oranı ilk kez hangi ayda 2/3'ten fazla olmuştur?</p>",
  "opts": [
   "Mart",
   "Şubat",
   "Nisan",
   "Ocak"
  ],
  "ans": 0,
  "hints": [
   "Lepistes sayısı, diğer balıkların toplamının 2 katından fazla olmalı."
  ],
  "steps": [
   "Ocak: 20 / 36, Şubat: 35 / 53 (2/3'ten az: 35 · 3 = 105 < 106), Mart: 50 / 73 (150 > 146)",
   "Cevap: <b>Mart</b>"
  ],
  "answer": "Cevap: <b>A</b>",
  "celdirici": {
   "1": "Şubattaki oranı (35/53 ≈ 0,66) 2/3'e eşit ya da fazla sanmak.",
   "2": "Lepistes sayısının en fazla olduğu ayı seçmek.",
   "3": "Oranı lepistes : diğerleri olarak karşılaştırmak."
  }
 },
 {
  "unite": "Cebirsel İfadeler ve Özdeşlikler",
  "kazanim": "M.8.2.1.3",
  "kazanimMetni": "Özdeşlikleri modellerle açıklar.",
  "konu": "Özdeşlikler",
  "zorluk": "Kolay",
  "q": "<p class=\"ask\">(<i>x</i> − 4)<sup>2</sup> ifadesinin açılımı aşağıdakilerden hangisidir?</p>",
  "opts": [
   "<i>x</i><sup>2</sup> − 4<i>x</i> + 16",
   "<i>x</i><sup>2</sup> + 8<i>x</i> + 16",
   "<i>x</i><sup>2</sup> + 16",
   "<i>x</i><sup>2</sup> − 8<i>x</i> + 16"
  ],
  "ans": 3,
  "hints": [
   "(<i>a</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>a</i><i>b</i> + <i>b</i><sup>2</sup> ve (<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>a</i><i>b</i> + <i>b</i><sup>2</sup>"
  ],
  "steps": [
   "(<i>x</i> − 4)<sup>2</sup> = <i>x</i><sup>2</sup> − 2 · <i>x</i> · 4 + 4<sup>2</sup>",
   "= <b><i>x</i><sup>2</sup> − 8<i>x</i> + 16</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "celdirici": {
   "0": "Orta terimi 2 ile çarpmayı unutmak.",
   "1": "Orta terimin işaretini ters almak.",
   "2": "Orta terimi unutmak; iki terimin toplamının karesi, karelerin toplamı değildir."
  }
 },
 {
  "unite": "Cebirsel İfadeler ve Özdeşlikler",
  "kazanim": "M.8.2.1.4",
  "kazanimMetni": "Cebirsel ifadeleri çarpanlara ayırır.",
  "konu": "Çarpanlara ayırma",
  "zorluk": "Orta",
  "q": "<p class=\"ask\">3<i>a</i><sup>2</sup> − 3 ifadesinin çarpanlarına ayrılmış hâli aşağıdakilerden hangisidir?</p>",
  "opts": [
   "3(<i>a</i> − 3)(<i>a</i> + 3)",
   "3(<i>a</i> − 1)<sup>2</sup>",
   "(3<i>a</i> − 1)(<i>a</i> + 1)",
   "3(<i>a</i> − 1)(<i>a</i> + 1)"
  ],
  "ans": 3,
  "hints": [
   "Önce ortak çarpanı parantezin dışına al, sonra parantezin içine bak."
  ],
  "steps": [
   "3<i>a</i><sup>2</sup> − 3 = 3(<i>a</i><sup>2</sup> − 1)",
   "= <b>3(<i>a</i> − 1)(<i>a</i> + 1)</b>"
  ],
  "answer": "Cevap: <b>D</b>",
  "celdirici": {
   "0": "Ortak çarpanı parantezden çıkarmadan karekök almak.",
   "1": "İki kare farkını tam kare sanmak.",
   "2": "3 ortak çarpanını yalnızca bir terime uygulamak."
  }
 },
 {
  "unite": "Cebirsel İfadeler ve Özdeşlikler",
  "kazanim": "M.8.2.1.3",
  "kazanimMetni": "Özdeşlikleri modellerle açıklar.",
  "konu": "Özdeşlikler",
  "zorluk": "Zor",
  "q": "<p>Kenar uzunluğu (2<i>x</i> + 3) cm olan kare biçimindeki bir kumaş, şekildeki gibi iki kare ve iki dikdörtgen parçaya ayrılmıştır. Boyasız iki dikdörtgen parçanın alanları toplamı 72 cm²'dir.</p><div class=\"fig\"><svg viewBox=\"0 0 400 304\" width=\"400\" role=\"img\" aria-label=\"Kenarı 2x + 3 olan kare: iki kare bölge boyalı, iki dikdörtgen bölge boyasız\"><rect x=\"130\" y=\"48\" width=\"170\" height=\"170\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"300\" y=\"48\" width=\"70\" height=\"170\" fill=\"var(--bg, #fff)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"130\" y=\"218\" width=\"170\" height=\"70\" fill=\"var(--bg, #fff)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"300\" y=\"218\" width=\"70\" height=\"70\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><line x1=\"132\" y1=\"28\" x2=\"298\" y2=\"28\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"298,28 288.8,24.1 288.8,31.9\" fill=\"var(--fig-stroke)\"/><polygon points=\"132,28 141.2,31.9 141.2,24.1\" fill=\"var(--fig-stroke)\"/><text x=\"215\" y=\"20\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >2x</text><line x1=\"302\" y1=\"28\" x2=\"368\" y2=\"28\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"368,28 358.8,24.1 358.8,31.9\" fill=\"var(--fig-stroke)\"/><polygon points=\"302,28 311.2,31.9 311.2,24.1\" fill=\"var(--fig-stroke)\"/><text x=\"335\" y=\"20\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >3</text><line x1=\"110\" y1=\"50\" x2=\"110\" y2=\"216\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"110,216 113.9,206.8 106.1,206.8\" fill=\"var(--fig-stroke)\"/><polygon points=\"110,50 106.1,59.2 113.9,59.2\" fill=\"var(--fig-stroke)\"/><text x=\"100\" y=\"139\" text-anchor=\"end\" font-size=\"15\" font-weight=\"700\" >2x</text><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"286\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><polygon points=\"110,286 113.9,276.8 106.1,276.8\" fill=\"var(--fig-stroke)\"/><polygon points=\"110,220 106.1,229.2 113.9,229.2\" fill=\"var(--fig-stroke)\"/><text x=\"100\" y=\"259\" text-anchor=\"end\" font-size=\"15\" font-weight=\"700\" >3</text></svg></div><p class=\"ask\">Kumaşın tamamının alanı kaç cm²'dir?</p>",
  "opts": [
   "144",
   "225",
   "81",
   "196"
  ],
  "ans": 1,
  "hints": [
   "Her dikdörtgenin alanı 2x · 3 = 6x'tir."
  ],
  "steps": [
   "İki dikdörtgen: 6<i>x</i> + 6<i>x</i> = 12<i>x</i> = 72 → <i>x</i> = 6",
   "Kenar: 2 · 6 + 3 = 15 cm",
   "Alan: 15² = <b>225</b> cm²"
  ],
  "answer": "Cevap: <b>B</b>",
  "celdirici": {
   "0": "Büyük boyalı karenin alanını vermek (12²).",
   "2": "Her dikdörtgenin alanını 12x sanmak: 24x = 72 → x = 3, kenar 9.",
   "3": "Kenara 3 yerine 2 eklemek."
  }
 },
 {
  "unite": "Cebirsel İfadeler ve Özdeşlikler",
  "kazanim": "M.8.2.1.3",
  "kazanimMetni": "Özdeşlikleri modellerle açıklar.",
  "konu": "Özdeşlikler",
  "zorluk": "Çok zor",
  "q": "<p>Alanı 121 m² olan kare biçimindeki bir salona dört eş dikdörtgen halı şekildeki gibi serilmiştir. Ortada kare biçiminde bir boşluk kalmıştır. Her halının alanı 28 m²'dir.</p><div class=\"fig\"><svg viewBox=\"0 0 420 350\" width=\"420\" role=\"img\" aria-label=\"Dört eş dikdörtgen halı kare bir odaya yerleştirilmiş; ortada kare boşluk kalmış\"><rect x=\"60\" y=\"60\" width=\"175\" height=\"100\" fill=\"var(--green-soft)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"235\" y=\"60\" width=\"100\" height=\"175\" fill=\"var(--blue-soft)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"160\" y=\"235\" width=\"175\" height=\"100\" fill=\"var(--green-soft)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"60\" y=\"160\" width=\"100\" height=\"175\" fill=\"var(--blue-soft)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><rect x=\"160\" y=\"160\" width=\"75\" height=\"75\" fill=\"var(--fig-yellow)\" stroke=\"var(--fig-stroke)\" stroke-width=\"2\"/><text x=\"197\" y=\"40\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" >Alan: 121 m²</text><text x=\"197.5\" y=\"203.5\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"700\" style=\"fill:#1f2328\">?</text></svg></div><p class=\"ask\">Bir halının uzun kenarı kaç metredir?</p>",
  "opts": [
   "3",
   "4",
   "7",
   "11"
  ],
  "ans": 2,
  "hints": [
   "Halının kenarları a ve b ise salonun kenarı a + b, boşluğun kenarı a − b'dir."
  ],
  "steps": [
   "Salonun kenarı: <i>a</i> + <i>b</i> = 11",
   "Boşluk: 121 − 4 · 28 = 9 → <i>a</i> − <i>b</i> = 3",
   "<i>a</i> = 7, <i>b</i> = 4 → uzun kenar <b>7</b> m"
  ],
  "answer": "Cevap: <b>C</b>",
  "celdirici": {
   "0": "Boşluğun kenarını vermek.",
   "1": "Kısa kenarı vermek.",
   "3": "Salonun kenarını vermek."
  }
 }
];
