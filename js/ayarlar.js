// Satış ve iletişim ayarları. Bu dosyadaki boş alanları doldurmanız yeterli; sayfa kendini buna göre günceller.
window.AYARLAR = {
  paketler: {
    // shopier: Shopier'daki ürün sayfasının adresi. Boşsa düğme "Çok yakında" olarak görünür.
    // fiyat: Yalnızca rakam, ör. '149'. Boşsa "Fiyat yakında" yazar.
    // eski: Lansman öncesi normal fiyat; doluysa fiyatın önünde üstü çizili görünür. İndirim bitince silin.
    // Her ünite: -yaris (Yarış Paketi, 60–72 soru), adsız (Tam Paket, 400 soru), -yukselt (Yarış → Tam yükseltme farkı)
    carpan: { shopier: '', fiyat: '199', eski: '299' }, 'carpan-yaris': { shopier: '', fiyat: '119', eski: '179' }, 'carpan-yukselt': { shopier: '', fiyat: '89', eski: '129' },
    uslu: { shopier: '', fiyat: '199', eski: '299' }, 'uslu-yaris': { shopier: '', fiyat: '119', eski: '179' }, 'uslu-yukselt': { shopier: '', fiyat: '89', eski: '129' },
    karekok: { shopier: '', fiyat: '199', eski: '299' }, 'karekok-yaris': { shopier: '', fiyat: '119', eski: '179' }, 'karekok-yukselt': { shopier: '', fiyat: '89', eski: '129' },
    cebir: { shopier: '', fiyat: '199', eski: '299' }, 'cebir-yaris': { shopier: '', fiyat: '119', eski: '179' }, 'cebir-yukselt': { shopier: '', fiyat: '89', eski: '129' },
    veri: { shopier: '', fiyat: '199', eski: '299' }, 'veri-yaris': { shopier: '', fiyat: '119', eski: '179' }, 'veri-yukselt': { shopier: '', fiyat: '89', eski: '129' },
    // 1. Dönem Paketi: dört ünitenin (çarpan, üslü, karekök, veri) Tam Paketi
    donem1: { shopier: '', fiyat: '', eski: '' }
  },

  // WhatsApp numarası, ülke koduyla ve boşluksuz: ör. '905551234567'. Boşsa WhatsApp düğmesi gizlenir.
  whatsapp: '',
  // Sitede yazı olarak görünecek telefon (boşsa gösterilmez).
  telefon: '',
  // İletişim e-postası. Boşsa e-posta düğmesi gizlenir.
  eposta: ''
};
