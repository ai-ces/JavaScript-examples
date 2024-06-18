let ogr1_ad = "abcd";
let ogr1_soyad = "efgh";
let ogr1_dogumTarihi = "2000";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
console.log(parseFloat(ogr1_ortalama));
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "dcba";
let ogr2_soyad = "hgfe";
let ogr2_dogumTarihi = "1999";
let ogr2_matamatik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matamatik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
console.log(parseFloat(ogr2_ortalama));
console.log(ogr2_ortalama >= 50);

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr1_yas);
console.log(ogr2_yas);
