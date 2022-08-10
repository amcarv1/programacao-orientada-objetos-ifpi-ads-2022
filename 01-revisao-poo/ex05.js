// Escreva um programa que imprima os números inteiros entre dois valores lidos.

const prompt = require('prompt-sync')();

let num01 = Number(prompt('Digite o primeiro número: '));
let num02 = Number(prompt('Digite o segundo número: '));

for (let i = num01; i <= num02; i++) {
    console.log(i);
}