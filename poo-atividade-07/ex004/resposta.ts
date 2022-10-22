class Conta {
    private numero: String;
    private saldo: number;
    
    constructor(numero : String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    get numeroConta(): String {
        return this.numero;
    }

    get saldoConta(): number {
        return this.saldo;
    }

    sacar(valor: number): boolean {
        if(this.saldo - valor < 0) {
            return false;
        }   else {
                this.saldo = this.saldo - valor;
                return true;
        }
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if(this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }   else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor(numero : String, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    public renderJuros(): void {
        this.depositar(this.saldoConta * this._taxaJuros/100);
    }
}

class Banco extends Poupanca {
    private contas: Conta[] = [];

    public inserir(c: Conta): void {
        if (!(this.consultar(c))) {
            this.contas.push(c);
        } else {
            console.log('Conta já existente!');
        }
    }

    public renderJuros(numero: string): void {
        if (this.consultar(numero)) {
            if (this.consultar(numero) instanceof Poupanca) {
                super.renderJuros();
            }
        }
    }

    public consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.getNumeroConta() == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumeroConta() == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    public sacar(numeroConta: String, valor: number): void {
        let conta: Conta = this.consultar(numeroConta);
        conta.sacar(valor);
    }

    public depositar(numeroConta: String, valor: number) {
        let conta: Conta = this.consultar(numeroConta);
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    public transferir(numeroCredito: string, numeroDebito: string, valor: number) {
        let conta01: Conta = this.consultar(numeroCredito);
        let conta02: Conta = this.consultar(numeroCredito);
        if (conta01 && conta02 != null) {
            conta01.transferir(numeroDebito, valor);
        }
    }

    public quantidadeContas(): number{
        return this.contas.length;
    }

    public dinheiroBanco(): number {
        let somatorio = 0;
        for (let conta of this.contas) {
            conta.valor += somatorio;  
        }

        return somatorio;
    }

    public mediaSaldo(): number {
        return this.dinheiroBanco() / this.quantidadeContas();
    }
}

class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }

    debitar(valor: number): void {
        let total = valor + valor * (this._taxaDesconto/100)
        super.sacar(total);
    }
}
