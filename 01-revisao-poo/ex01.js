// Escreva um programa que possua uma variável com um número ponto flutuante e mostre seu antecessor e sucessor, ambos inteiros.

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: '));

let intNum = Math.trunc(num);

console.log('Sucessor:', intNum + 1,'\nAntecessor:', intNum - 1);