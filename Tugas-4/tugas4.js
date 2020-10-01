// Soal 1
// Jawaban Soal 1
var a = 2;
var b = 20;

console.log("Jawaban Soal 1");
console.log("LOOPING PERTAMA");
while(a <= 20){
    console.log(a + " - I love coding");
    a+=2;
}

console.log("LOOPING KEDUA")
while(b >= 2){
    console.log(b + " - I will become a frontend developper");
    b-=2;
}
  

// Soal 2 
// Jawaban Soal 2
console.log("");
console.log("Jawaban Soal 2");
var a = 1;

for(a = 1; a <= 20; a++){

    if(a % 2 == 0){
        console.log(a + " - Berkualitas")
    } else if(a % 3 == 0 && a % 2 == 1){
        console.log(a + " - I Love Coding")
    } else{
        console.log(a + " - Santai")
    }
}

// Soal 3 
// Jawaban Soal 3
console.log("");
console.log("Jawaban Soal 3");
var s ='';

for (i = 0; i < 7; i++){
    for(j = 0; j <= i; j++){
        s += '#';
    }
    s += '\n';
}
console.log(s);

// Soal 4
// Jawaban Soal 4
console.log("");
console.log("Jawaban Soal 4");

var kalimat = "saya sangat senang belajar javascript";
var array = kalimat.split(" ");
console.log(array);

// Soal 5
// Jawaban Soal 5
console.log("");
console.log("Jawaban Soal 5");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();

for(var b = 0; b < daftarBuah.length; b++){
    console.log(daftarBuah[b]);
}
