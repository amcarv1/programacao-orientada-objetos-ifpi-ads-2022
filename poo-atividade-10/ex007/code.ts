public interface FiguraGeometrica {
    public calculaArea(): number;
}

class Quadrado implements FiguraGeometrica {
    private _lado: number;

    constructor(lado: number) {
        this._lado = lado;
    }

    public calculaArea(): number {
        return (this._lado ** 2);
    }

}

class Triangulo implements FiguraGeometrica {
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }

    public calculaArea(): number {
        return ((this._base * this._altura) / 2);
    }

}
