// Escrever um programa que leia três valores inteiros e apresente o maior e o menor dos valores lidos.

const prompt = require('prompt-sync')();

let num01 = Number(prompt('Digite um número: '));
let num02 = Number(prompt('Digite o segundo número: '));
let num03 = Number(prompt('Digite o terceiro número: '));

if (num01 > num02) {
    if (num02 > num03) {
        console.log('Maior:', num01, '\nMenor:', num03);
    }   else if (num02 < num03) {
        console.log('Maior:', num01, '\nMenor:', num02);
    }   else {
        console.log('Maior:', num01, ' -- Os outros dois números são iguais!'); 
    }
}

else if (num02 > num01) {
    if (num01 > num03) {
        console.log('Maior:', num02, '\nMenor:', num03);
    }   else if (num01 < num03) {
        console.log('Maior:', num02, '\nMenor:', num01);
    }   else {
        console.log('Maior:', num02, ' -- Os outros dois números são iguais!'); 
    }
}

else if (num03 > num01) {
    if (num01 > num02) {
        console.log('Maior:', num03, '\nMenor:', num02);
    }   else if (num01 < num02) {
        console.log('Maior:', num03, '\nMenor:', num01);
    }   else {
        console.log('Maior:', num03, ' -- Os outros dois números são iguais!'); 
    }
}