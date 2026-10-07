# Emre Hoca LGS Akademi · Vitrin sitesi

Görselli, özgün LGS matematik soru paketlerinin tanıtım ve satış sayfası.

## Yayına alma (bir kez)
GitHub'da bu depo → **Settings → Pages → Build and deployment**: Source "Deploy from a branch", Branch `main` / `(root)` → Save.
Birkaç dakika sonra site şu adreste açılır: https://emreaygun065.github.io/Emre-Hoca-Vitrin/

## Satışı açmak
`js/ayarlar.js` dosyasını doldurun:
- `paketler.uslu.shopier`: Shopier'daki ürün sayfasının adresi (doluysa "Satın al" düğmesi çalışır).
- `paketler.uslu.fiyat`: Fiyat, yalnızca rakam (ör. `'149'`).
- `whatsapp`: Ülke koduyla numara (ör. `'905551234567'`); "Demo talep et" ve "Haber ver" düğmeleri buraya gider.
- `eposta`: İletişim e-postası.

## Dosyalar
- `index.html`: sayfa
- `css/site.css`: tasarım (açık/koyu tema)
- `js/site.js`: düğmeler ve ücretsiz örnek soru çözücü
- `js/ornekler.js`: vitrindeki 4 ücretsiz örnek soru
- `js/ayarlar.js`: satış ve iletişim bilgileri
