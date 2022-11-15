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

class Banco {
    private _contas: Conta[] = [];

    inserir(conta: Conta) {
        this._contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
            }   else {
                throw new ContaInexistenteError('Conta Inexistente!');
            }
        }

        return contaProcurada;
    }

    private consultarComFilter(numero: string): Conta {
        return this._contas.filter(conta => conta.numero == numero)[0];
    }

    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
            }   else {
                throw new ContaInexistenteError ('Conta Inexistente!');
            }
        }

        return indiceProcurado;
    }


    alterar(conta: Conta) {
        let indice: number = this.consultarPorIndice(conta.numero);
        
        this._contas[indice] = conta;
    }

    depositar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);

        this._contas[indice].depositar(valor);
    }

    sacar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);

        this._contas[indice].sacar(valor);   
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        for (var i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        
        this._contas.pop();
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number) {
		let contaCredito: Conta = this.consultar(numeroCredito);
		let contaDebito: Conta = this.consultar(numeroDebito);
		contaDebito.transferir(contaCredito, valor);
	}

	calcularQuantidadeContas(): number {
		return this._contas.length;
	}

	calcularTotalSaldos(): number {
		let totalSaldo: number = 0;
		for (let conta of this._contas) {
			totalSaldo += conta.saldo;
		}

		return totalSaldo;
	}

	calcularMediaSaldos() {
		return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
	}

    renderJuros(numero: string) {
        let contaProcurada = this.consultar(numero);

        if (contaProcurada instanceof Poupanca) {
            contaProcurada.renderJuros();
        }
    }

    
    listaContas(): string {
        let listaStrings = '';
        for(let i: number = 0; i < this._contas.length; i++) {
            listaStrings = listaStrings + 
                           ' Numero: ' + this._contas[i].numero +  
                           ' - Saldo: '  + this._contas[i].saldo + '\n';
                           
        }   

        return listaStrings;
    }
    
}
