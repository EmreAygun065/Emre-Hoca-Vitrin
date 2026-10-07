# Emre Hoca LGS Akademi · vitrin sitesi — çalışma notları

- Bu depo **herkese açıktır** ve GitHub Pages ile `main` dalından yayınlanır.
- Satılan paketlerin soruları burada **düz metin olarak yer almaz**. Sorular, çözümler ve PDF üretimi gizli `benim-projem` deposundadır (`urun/` klasörü).
- Etkileşimli sürüm (`uygulama/`): paket içerikleri `uygulama/veri/*.json` içinde AES-GCM ile şifrelidir; `kodlar.json` yalnızca koddan türetilen kimlikleri ve sarılı anahtarları taşır. Bu dosyalar elle düzenlenmez; `benim-projem` içinde `node urun/erisim/erisim.cjs yayinla` ile üretilir. Kodların kendisi ve içerik anahtarları bu depoya asla konmaz.
- Kod üretme/iptal: `benim-projem` içinde `erisim.cjs uret|iptal`, ardından `yayinla` ve bu deponun gönderilmesi.
- `js/ornekler.js` yalnızca ücretsiz örnek soruları içerir (paket başına en fazla 4–5 soru). Paketin geri kalanını buraya koyma.
- Satış ve iletişim bilgileri yalnızca `js/ayarlar.js` içindedir; fiyat, Shopier linki, telefon ve e-posta Emre Hoca'dan alınmadan doldurulmaz.
- Sayfa açık ve koyu temada, telefonda (390 px) yatay kaydırma olmadan çalışmalıdır.
