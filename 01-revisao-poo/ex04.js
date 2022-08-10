// Escreva um programa que apresente o mês por extenso, a partir de um número digitado pelo usuário (entre 1 e 12) e a quantidade de dias do mês.

const prompt = require('prompt-sync')();

let numMonth = Number(prompt('Digite o número do mês: '));

if (numMonth === 1) console.log('Janeiro - 31 dias');
if (numMonth === 2) console.log('Fevereiro - 28 dias');
if (numMonth === 3) console.log('Março - 31 dias');
if (numMonth === 4) console.log('Abril - 30 dias');
if (numMonth === 5) console.log('Maio - 31 dias');
if (numMonth === 6) console.log('Junho - 30 dias');
if (numMonth === 7) console.log('Julho - 31 dias');
if (numMonth === 8) console.log('Agosto - 31 dias');
if (numMonth === 9) console.log('Setembro - 30 dias');
if (numMonth === 10) console.log('Outubro - 31 dias');
if (numMonth === 11) console.log('Novembro - 30 dias');
if (numMonth === 12) console.log('Dezembro - 31 dias');