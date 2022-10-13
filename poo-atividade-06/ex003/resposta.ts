class Banco {
    private contas: Conta[] = [];

    public inserir(c: Conta): void {
        if (!(this.consultar(c))) {
            this.contas.push(c);
        } else {
            console.log('Conta já existente!');
        }
    }

    public consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
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
