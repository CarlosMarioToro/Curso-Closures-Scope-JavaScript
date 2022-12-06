// Variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb' // reasignacion
var a = 'aa' // redeclaracions

// Global Scope
var fruit = 'apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);