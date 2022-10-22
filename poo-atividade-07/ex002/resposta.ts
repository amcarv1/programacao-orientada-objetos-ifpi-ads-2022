class Calculadora {
    private _num01: number;
    private _num02: number;

    constructor(num01: number, num02: number) {
        this._num01 = num01;
        this._num02 = num02;
    }

    soma(): number {
        return this._num01 + this._num02;
    }
}

let c01: Calculadora = new Calculadora(2, 2);
console.log(c01.soma());
