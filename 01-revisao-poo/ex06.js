/*
Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética e o desvio padrão destes números. Obs: o
valor –1 é somente um terminador e não deve ser considerado nos cálculos.
*/

const prompt = require('prompt-sync')();

let contador = Number(prompt('Digite o valor inicial: '));

let somatorio = 0;
let quantidade = 0;

while (contador > -1) {
    somatorio += contador;
    quantidade++;
    contador--;
}

console.log('Somatório:', somatorio,'\nMédia:', somatorio/quantidade);