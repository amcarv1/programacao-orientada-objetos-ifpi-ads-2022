/*
Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética e o desvio padrão destes números. Obs: o
valor –1 é somente um terminador e não deve ser considerado nos cálculos.
*/

const prompt = require('prompt-sync')();

let counter = Number(prompt('Digite o valor inicial: '));

let numbers = [];
let sum = 0;
let quantityNumbers = 0;

while (counter > -1) {
    numbers.push(counter);
    sum += counter;
    quantityNumbers++;
    counter--;
}

let average = sum/quantityNumbers;

let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum2 = (numbers[i] - average) ** 2;
    sum3 += sum2;
}

let standardDeviation = ((sum3 / quantityNumbers) ** 0.5);

console.log('Somatório:', sum,'\nMédia:', average,'\nDesvio Padrão:', standardDeviation);
