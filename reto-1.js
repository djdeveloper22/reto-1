// reto uno: 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir. Javascript
const scanf = require("scanf");

console.group('------- edad para conducir mayor de 18 ----------');
    console.log('Ingrese su edad: ')
    var edad = scanf('%d');
    edad > 18 ? 
        console.log('Es mayor de edad, ya puede conducir'):
        console.log('Aún no cumple la edad para conducir');
console.groupEnd();
