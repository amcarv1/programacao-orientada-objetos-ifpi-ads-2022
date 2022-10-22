class Calculadora {
    private _num01: number;
    private _num02: number;

    constructor(num01: number, num02: number) {
        this._num01 = num01;
        this._num02 = num02;
    }

    get num01() {
        return this._num01;
    }

    get num02() {
        return this._num02;
    }

    soma(): number {
        return this._num01 + this._num02;
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor(num01: number, num02: number) {
        super(num01, num02);
    }

    exponeciar() {
        return (this.num01) ** (this.num02);
    }
}

let c01: CalculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(c01.exponeciar());

/* 
Foi necessária alguma modificação em Calculadora para o acesso aos atributos?
Resposta = Sim, foi necessário adicionar o método get na classe Calculadora 
*/ 
