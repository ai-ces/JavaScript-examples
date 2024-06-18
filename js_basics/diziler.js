// let meyveler = ["Elma", "Armut", "Muz", "Cilek"];

// console.log(meyveler.length); // dizideki eleman sayisi

// // dizinin ilk ve son elemani

// console.log(meyveler[0]);
// console.log(meyveler[meyveler.length - 1]);

// console.log(meyveler.includes("Elma")); // Elma dizinin bir elemanimidir ? (True / False) {indexOf}

// meyveler.push("Kiraz"); // Kiraz meyvesini listenin sonuna ekler
// meyveler.unshift("Karpuz"); // Karpuz meyvesini listenin basina ekler
// console.log(meyveler);

// meyveler.pop(); // Son elemani siler
// console.log(meyveler);

let ogr1 = ["", "", 1995, [70, 60, 80]];
let ogr2 = ["", "", 1994, [80, 80, 90]];
let ogr3 = ["", "", 1992, [60, 60, 70]];

let ogrenciler = [ogr1, ogr2, ogr3];

let ogr1_yas = new Date().getFullYear() - ogrenciler[0][2];
let ogr2_yas = new Date().getFullYear() - ogrenciler[1][2];
let ogr3_yas = new Date().getFullYear() - ogrenciler[2][2];

let ogr1_not =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ogr2_not =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ogr3_not =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(
  ogr1_yas,
  ogr2_yas,
  ogr3_yas,
  ogr1_not.toFixed(1),
  ogr2_not.toFixed(1),
  ogr3_not.toFixed(1)
);
