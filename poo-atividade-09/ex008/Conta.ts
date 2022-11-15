class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this.creditar(saldo);
    }

    private validaValor(valor: number) {
        if(valor <= 0) {
            throw new ValorInvalidoError('O valor não pode ser igual ou menor que zero!');
        }
    }

    public creditar(valor: number): void {
        this.validaValor(valor);

        this._saldo = this._saldo + valor;
    }

    public sacar(valor: number): void {
        this.validaValor(valor);

        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    }
    
    public depositar(valor: number): void {
        this.validaValor(valor);

        this._saldo = this._saldo + valor;
    }

    public transferir(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }
}
