function meuArray(elementos: Array): string {
    let elemento2 = '';
    let elemento3 = '';

    elementos.forEach(function(elemento) {
        elemento2 = String(elemento);
        elemento3 += elemento2+'-';
    })

    return (elemento3.slice(0, elemento3.length - 1));

}

console.log(meuArray([1, 2, 3, 4]));
