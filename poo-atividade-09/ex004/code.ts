class AplicacaoError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class ContaInexistenteError extends AplicacaoError {
    constructor(message : string) {
        super(message);
    }
}

class ValorInvalidoError extends AplicacaoError {
    constructor(message : string) {
        super(message);
    }
}

class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this.creditar(saldo);
    }

    public creditar(valor: number): void {
        if(valor <= 0) {
            throw new ValorInvalidoError('O valor de depósito inserido está inválido!');
        }

        this._saldo = this._saldo + valor;
    }

    public sacar(valor: number): void {
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    }
    
    public depositar(valor: number): void {
        if(valor <= 0) {
            throw new ValorInvalidoError('O valor de depósito inserido está inválido!');
        }

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
