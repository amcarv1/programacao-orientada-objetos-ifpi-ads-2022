class Hora {
    constructor(private _horas: number, private _minutos: number, private _segundos: number) {}

    lerHora(): void {
        console.log(this._horas);
    }

    lerMinutos(): void {
        console.log(this._minutos);
    }

    lerSegundos(): void {
        console.log(this._segundos);
    }

    lerHoraCompleta(): void {
        console.log(`${this._horas}:${this._minutos}:${this._segundos}`);
    }

}

let h01 = new Hora(10, 50, 30);
h01.lerHora();
h01.lerMinutos();
h01.lerSegundos();
h01.lerHoraCompleta();
