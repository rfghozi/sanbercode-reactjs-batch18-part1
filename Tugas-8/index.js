var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000}
]

let time = 10000;
let indeks = 0;
function execute(time){
    readBooks(time, books[indeks], function(sisa){
        if (sisa !== 0 && books[indeks] !== 0){
            indeks++
            execute(sisa)
        }
    })
}

execute(time);