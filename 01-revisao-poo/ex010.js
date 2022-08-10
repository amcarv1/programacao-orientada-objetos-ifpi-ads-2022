/*
Faça uma função que recebe por parâmetro uma medida de tempo expressa em
milissegundos e retorna esse tempo dias, horas, minutos e segundos no formato: “Dias
hh:mm:ss”.
*/

function convertMilliseconds(milliseconds) {
    date = new Date(milliseconds);
    return date.toString();
}

console.log(convertMilliseconds(1660151390703));
