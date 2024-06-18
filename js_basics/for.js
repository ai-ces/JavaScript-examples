let sayilar = [1, 5, 7, 15, 3, 25];

// 1 - sayilar listesindeki her bir elemanin karesini yazdiriniz.

for (let sayi of sayilar) {
  console.log(sayi * sayi);
}

// 2 - sayilar listesinde hangi sayilar 5 in katidir ?

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i]);
  }
}

// 3 - sayilar listesindeki cift sayilarin toplamini bulunuz.

let toplam = 0;

for (let i in sayilar) {
  if (sayilar[i] % 2 == 0) {
    toplam += sayilar[i];
  }
}
console.log(toplam);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4 - urunler listesindeki tum urunleri buyuk harf ile yazdiriniz.

for (let urun of urunler) {
  console.log(urun.toUpperCase());
}
