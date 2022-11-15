abstract class FiguraGeometrica {
  abstract calculaPerimetro(): number;
}

class Quadrado extends FiguraGeometrica {
    private _lado: number;

    constructor(lado: number) {
        super();
        this._lado = lado;
    }
    
    calculaPerimetro(): number {
        return this._lado ** 2;
    }
}

class Triangulo extends FiguraGeometrica {
    private _base: number;
    private _altura: number;

    constructor(lado: number, base: number, altura: number) {
        super();
        this._base = base;
        this._altura = altura;

    }
    
    calculaPerimetro(): number {
        return ((this._base * this._altura) / 2);
    }
}
