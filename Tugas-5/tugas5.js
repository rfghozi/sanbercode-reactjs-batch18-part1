// Soal 1
// Jawaban Soal 1
console.log("Jawaban Soal 1");
function halo(){
   return "Halo Sanbers!";
}

console.log(halo());
console.log("-----------------------");

// Soal 2 
// Jawaban Soal 2
console.log("");
console.log("Jawaban Soal 2");
function kalikan(){
    a = num1 * num2;

    return a;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1,num2);
console.log("Hasil dari 12 * 4 = ", hasilKali);
console.log("-----------------------");


// Soal 3
// Jawaban Soal 3
console.log("");
console.log("Jawaban Soal 3");

function introduce(){
    a = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobi yaitu " + hobby + "!";
    
    return a;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
console.log("-----------------------");


// Soal 4 
// Jawaban Soal 4
console.log("");
console.log("Jawaban Soal 4");

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objectDaftarPeserta = {
    name: arrayDaftarPeserta[0],
    gender: arrayDaftarPeserta[1],
    hobby: arrayDaftarPeserta[2],
    "tahun lahir": arrayDaftarPeserta[3]
}

console.log("hasil dari pemanggilan nama :");
console.log(objectDaftarPeserta["name"]);
console.log("hasil dari pemanggilan objek function :")
console.log(objectDaftarPeserta);
console.log("-----------------------");


// Soal 5
// Jawaban Soal 5
console.log("");
console.log("Jawaban Soal 5");
var buah = [
    {
        nama: "strawberry",
        warna: "merah",
        "ada bijinya": "tidak",
        harga: 8000
    },

    {
        nama: "jeruk",
        warna: "oranye",
        "ada bijinya": "ada",
        harga : 9000
    },

    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "ada",
        harga: 10000
    },

    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 5000
    }
]

console.log(buah[0]);
console.log("-----------------------");

// Soal 6
// Jawaban Soal 6
console.log("");
console.log("Jawaban Soal 6");

var dataFilm = [];

function listFilm(nama, durasi, genre, tahun){
    dataFilm.push ({
            nama: nama,
            durasi: durasi,
            genre: genre,
            tahun: tahun
        });
    
    return dataFilm;
}

listFilm("Resident Evil", "90 menit", "Horror", 2002);
console.log(dataFilm);


