// Soal 1
// Jawaban Soal 1
console.log("Jawaban Soal 1");

const luasLingkaran = (r) => {
    let luas = 3.14 * r * r;
    return luas;
}

const kelilingLingkaran = (r) => {
    let keliling = 2 * 3.14 * r;
    return keliling;
}

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

// Soal 2 
// Jawaban Soal 2
console.log("")
console.log("Jawaban Soal 2");

let kalimat = "";

const tambahKalimat = (kata) => {
   kalimat += `${kata}`;
}

tambahKalimat(`saya `);
tambahKalimat(`adalah `);
tambahKalimat(`seorang `);
tambahKalimat(`frontend `);
tambahKalimat(`developper`);

console.log(kalimat);

// Soal 3
// Jawaban Soal 3
console.log("");
console.log("Jawaban Soal 3");
const name = (firstName, lastName) => {
    
    fullname = firstName + " " + lastName;
    return fullname;
}

console.log(name("Romzi", "Farhan"));

// Soal 4
// Jawaban Soal 4 
console.log("");
console.log("Jawaban Soal 4");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;

console.log(newObject);

// Soal 5
// Jawaban Soal 5
console.log("");
console.log("Jawaban Soal 5");

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

let combine = [...west, ...east];
console.log(combine);