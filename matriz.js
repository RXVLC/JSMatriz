const { question } = require("readline-sync");

function generarcuadrado(num){
    return Array(num)
    .fill('+' .repeat(num))
    .join('\n')
}

const num = question('Por favor, ingresa un número:');
console.log(generarcuadrado(Number(num)));
