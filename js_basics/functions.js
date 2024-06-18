// Kendisine gonderilen kelimeyi belirtilen kez ekranda yazdiran fonksiyonu yaziniz.

function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}

kelimeYazdir("Merhaba", 5);
// Dikdortgenin alan ve cevresini hesaplayan fonksiyonu yaziniz.

function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;

  return `alan: ${alan} cevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(5, 10);
sonuc = alanCevreHesapla(5, 10);

console.log(sonuc);

// yazi tura uygulamasini fonksiyon kullanarak yaziniz.

function yaziTura() {
  let random = Math.random();

  if (random < 0.5) {
    console.log("yazi");
  } else {
    console.log("tura");
  }
  console.log(random);
}

yaziTura();
yaziTura();

// kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonsiyonu yaziniz.

function tamBolenler(sayi) {
  let sayilar = [];

  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      sayilar.push(i);
    }
  }

  return sayilar;
}

console.log(tamBolenler(10));
console.log(tamBolenler(35));
