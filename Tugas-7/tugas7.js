// Soal 1 
// Jawaban Soal 1
console.log("Jawaban Soal 1")

// relase 0
class Animals{
    constructor(name){
        this._namabinatang = name;
        this._kaki = 4;
        this._darah = false
    }

    get name(){
        return this._namabinatang;
    }

    set name(x){
        this._namabinatang = x;
    }

    get legs(){
        return this._kaki;
    }

    set legs(x){
        this._kaki = x;
    }

    get cold_blooded(){
        return this._darah;
    }
}

sheep = new Animals("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// relase 1
class Ape extends Animals {
    constructor(name){
        super(name);
        this._yell = "Auooo";
    }

    yell() {
        return console.log(this._yell);
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

class Frog extends Animals {
    constructor(name){
        super(name);
        this._jump = "hop hop"
    }

    jump() {
        return console.log(this._jump);
    }
}
 
var kodok = new Frog("buduk");
kodok.jump();

// Soal 2
// Jawaban Soal 2
console.log("");
console.log("Jawaban Soal 2");
class Clock{
    constructor({template}) {
        this.template = template;
        this.timer
    }
    
    render = () => {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop(){
        clearInterval(this.time)
    }

    start(){
        this.render()
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();