interface Comparavel{
    comparar(forma: FiguraGeometrica): number;
}

interface FiguraGeometrica {   
    calculaArea(): number;
}

class Quadrado implements FiguraGeometrica {
    private _lado: number;

    constructor(lado: number){
        this._lado = lado;
    }

    public calculaArea(): number {
        return this._lado ** 2;
    }

    public comparar(quadrado: Quadrado){
        if(this.calculaArea() < quadrado.calculaArea()){
            return -1;
        } else if (this.calculaArea() == quadrado.calculaArea()){
            return 0;
        } else {
            return 1;
        }
    }
}

class Triangulo implements FiguraGeometrica {
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number){
        this._base = base;
        this._altura = altura;
    }

    public calculaArea(): number {
        return ((this._base * this._altura) / 2);
    }

    public comparar(triangulo: Triangulo){
        if(this.calculaArea() < triangulo.calculaArea()){
            return -1;
        } else if (this.calculaArea() == triangulo.calculaArea()){
            return 0;
        } else {
            return 1;
        }
    }
}

let q01: Quadrado = new Quadrado(6);
let q02: Quadrado = new Quadrado(2);
console.log(q01.comparar(q02));

let t01: Triangulo = new Triangulo(4, 2);
let t02: Triangulo = new Triangulo(10, 4);
console.log(t01.comparar(t02));
