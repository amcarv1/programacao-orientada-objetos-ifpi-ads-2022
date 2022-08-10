// Escreva um programa para converter de real para bitcoin e exibir para o usuário a resposta final. Considere até 8 casas decimais.

const prompt = require('prompt-sync')();

let yourMoney = Number(prompt('Digite o valor em real:'));
let bitcoinValue = Number(prompt('Digite o valor do bitcoin:'));

let yourBitcoinValue = (yourMoney/bitcoinValue);
console.log(yourBitcoinValue.toFixed(8));