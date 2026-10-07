// Satış ve iletişim ayarları. Bu dosyadaki boş alanları doldurmanız yeterli; sayfa kendini buna göre günceller.
window.AYARLAR = {
  paketler: {
    // shopier: Shopier'daki ürün sayfasının adresi. Boşsa düğme "Çok yakında" olarak görünür.
    // fiyat: Yalnızca rakam, ör. '149'. Boşsa "Fiyat yakında" yazar.
    carpan: { shopier: '', fiyat: '' },
    uslu: { shopier: '', fiyat: '' },
    karekok: { shopier: '', fiyat: '' },
    ikili: { shopier: '', fiyat: '' }
  },
  // WhatsApp numarası, ülke koduyla ve boşluksuz: ör. '905551234567'. Boşsa WhatsApp düğmesi gizlenir.
  whatsapp: '',
  // Sitede yazı olarak görünecek telefon (boşsa gösterilmez).
  telefon: '',
  // İletişim e-postası. Boşsa e-posta düğmesi gizlenir.
  eposta: ''
};
