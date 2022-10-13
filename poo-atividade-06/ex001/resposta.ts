class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    soma(): number {
        return this.operando1 + this.operando2;
    }

    multiplica(): number {
        return this.operando1 * this.operando2;
    }

}

let operacao = new Calculadora(10, 12);
console.log(operacao.soma()); // 22
console.log(operacao.multiplica()); // 120

console.log(operacao.operando1); // Property 'operando1' is private and only accessible within class 'Calculadora'.
console.log(operacao.operando2); // Property 'operando2' is private and only accessible within class 'Calculadora'.
