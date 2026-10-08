// Satış ve iletişim ayarları. Bu dosyadaki boş alanları doldurmanız yeterli; sayfa kendini buna göre günceller.
window.AYARLAR = {
  paketler: {
    // shopier: Shopier'daki ürün sayfasının adresi. Boşsa düğme "Çok yakında" olarak görünür.
    // fiyat: Yalnızca rakam, ör. '149'. Boşsa "Fiyat yakında" yazar.
    // Her ünite: -yaris (Yarış Paketi, 60–72 soru), adsız (Tam Paket, 400 soru), -yukselt (Yarış → Tam yükseltme farkı)
    carpan: { shopier: '', fiyat: '' }, 'carpan-yaris': { shopier: '', fiyat: '' }, 'carpan-yukselt': { shopier: '', fiyat: '' },
    uslu: { shopier: '', fiyat: '' }, 'uslu-yaris': { shopier: '', fiyat: '' }, 'uslu-yukselt': { shopier: '', fiyat: '' },
    karekok: { shopier: '', fiyat: '' }, 'karekok-yaris': { shopier: '', fiyat: '' }, 'karekok-yukselt': { shopier: '', fiyat: '' },
    cebir: { shopier: '', fiyat: '' }, 'cebir-yaris': { shopier: '', fiyat: '' }, 'cebir-yukselt': { shopier: '', fiyat: '' },
    veri: { shopier: '', fiyat: '' }, 'veri-yaris': { shopier: '', fiyat: '' }, 'veri-yukselt': { shopier: '', fiyat: '' },
    // 1. Dönem Paketi: dört ünitenin (çarpan, üslü, karekök, veri) Tam Paketi
    donem1: { shopier: '', fiyat: '' }
  },

  // WhatsApp numarası, ülke koduyla ve boşluksuz: ör. '905551234567'. Boşsa WhatsApp düğmesi gizlenir.
  whatsapp: '',
  // Sitede yazı olarak görünecek telefon (boşsa gösterilmez).
  telefon: '',
  // İletişim e-postası. Boşsa e-posta düğmesi gizlenir.
  eposta: ''
};
