class Pai {
    private _placa: String;
    private _ano: number;
    private _modelo: String; 

    constructor(placa: String, ano: number, modelo: String) {
        this._placa = placa;
        this._ano = ano;
        this._modelo = modelo;
    }
}

class CarroEletrico extends Pai{
    private _autonomiaBateria: number;

    constructor(placa: String, ano: number, modelo: String,autonomiaBateria: number) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
}

class Veiculo extends Pai{
    constructor(placa: String, ano: number, modelo: String,) {
        super(placa, ano, modelo);
    }
}

class Carro  extends Pai{
    constructor(placa: String, ano: number, modelo: String,) {
        super(placa, ano, modelo);
    }
}
