class Conta {
    numero: String;
    saldo: number;
    
    constructor(numero : String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
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
