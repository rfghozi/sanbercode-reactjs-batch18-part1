var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

let time = 10000;
let indeks = 0;

function execute(time){
    readBooksPromise(time, books[indeks]).then(
        function(tersisa){
            if (tersisa > 0 && tersisa !== 1000){
                indeks++;
                execute(tersisa);
            } 
        }
    ).catch(
        function (error){
            console.log(error)
        }
    )
}
execute(time);