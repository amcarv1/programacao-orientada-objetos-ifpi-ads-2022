class Poupanca extends Conta {
    private _taxaDejuros: number;

    public get taxaDeJuros(): number {
        return this._taxaDejuros;
    }

    constructor(numero: string, saldo: number, taxaDeJuros: number) {
        super(numero, saldo);
        this._taxaDejuros = taxaDeJuros;
    }

    public renderJuros() {
        let saldo = this.saldo;
        this.depositar(saldo * this.taxaDeJuros/100);
    }

}
