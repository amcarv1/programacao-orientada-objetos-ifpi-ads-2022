// Escreva um programa que leia um vetor de inteiros de 5 posições e apresente-o na tela de forma crescente e decrescente.

const prompt = require('prompt-sync')();

let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(Number(prompt(`Digite o ${i}. elemento: `)));
};

numbers.sort(function(a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

decreasingNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    decreasingNumbers.push(numbers[i]);
}

console.log('Ordem Crescente: ', numbers);
console.log('Ordem Decrescente: ' ,decreasingNumbers);