// Soal 1 
// ... Jawaban Soal 1
console.log("Jawaban Soal 1")
var kata1 = "saya";
var kata2 = "senang";
var kata3 = "belajar";
var kata4 = "javascript";

var besar = kata4.toUpperCase();
var kat = kata2.substr(0,1);
var kat2 = kata2.substr(1,6);
var besar2 = kat.toUpperCase();
var new2 = besar2.concat(kat2);

console.log(kata1.concat(" ",new2).concat(" ",kata3).concat(" ",besar));

// Soal 2
// ... Jawaban Soal 2
console.log("")
console.log("Jawaban Soal 2")
var Pertama = "1";
var Kedua = "2";
var Ketiga = "4";
var Keempat = "5";

Int1 = parseInt(Pertama);
Int2 = parseInt(Kedua);
Int3 = parseInt(Ketiga);
Int4 = parseInt(Keempat);

console.log("Nilai Pertama adalah = ", Int1);
console.log("Nilai Kedua adalah = ",Int2);
console.log("Nilai Ketiga adalah = ",Int3);
console.log("Nilai Keempat adalah = ",Int4);
console.log("1 + 2 + 4 + 5 = ", Int1+Int2+Int3+Int4);

// Soal 3
// ... Jawaban Soal 3
console.log("");
console.log("Jawaban Soal 3")
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);  
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
// ... Jawaban Soal 4
console.log("");
console.log("Jawaban Soal 4");

var nilai = 76;
if (nilai >= 80){
    console.log("Indeks Nilai anda A")
} else if(nilai >= 70 & nilai < 80){
    console.log("Indeks Nilai anda B")
} else if(nilai >= 60 & nilai < 70){
    console.log("Indeks Nilai anda C")
} else if(nilai >= 50 & nilai < 60){
    console.log("Indeks Nilai anda D")
} else {
    console.log("Indeks Nilai anda E")
}

// Soal 5
// ... Jawaban Soal 5
console.log("");
console.log("Jawaban Soal 5")

var tanggal = 20;
var bulan = 9;
var tahun = 1997;

switch(bulan){
    case 1: bulan = "Januari"; break;
    case 2: bulan = "Februari"; break;
    case 3: bulan = "Maret"; break;
    case 4: bulan = "April"; break;
    case 5: bulan = "Mei"; break; 
    case 6: bulan = "Juni"; break; 
    case 7: bulan = "Juli"; break; 
    case 8: bulan = "Agustus"; break; 
    case 9: bulan = "September"; break;
    case 10: bulan = "Oktober"; break; 
    case 11: bulan = "November"; break; 
    case 12: bulan = "Desember"; break; 
}

var tampil = tanggal + " " + bulan + " " + tahun;

console.log("Tanggal Lahir Saya adalah, ",tampil);
