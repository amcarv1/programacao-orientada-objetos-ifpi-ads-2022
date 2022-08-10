/*
Escreva uma função que dados 2 valores reais v e t. Onde v é um valor em R$ e t é a
taxa de juros em %. Retorne um array de 12 posições meses representando a taxa
aplicada como juros compostos ao valor v mês a mês.
Ex: v = 1000,00 e t = 1%. Retornar: 1.010 – 1.020,10 - 1.030,30 - ... - 1.126,82
*/

function calculaJuros(v, t) {
    let valorMensal = [];
    let valor = v;
    for (let i = 1; i <= 12; i++) {
        valorMensal.push((valor + (valor * t/100)).toFixed(2));
        valor = valor + (valor * t/100);
    }
    console.log(valorMensal);
}

calculaJuros(1000, 1);