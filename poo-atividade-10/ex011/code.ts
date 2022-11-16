class AuditoriaInterna {
    public listaTributaveis: number[] = [];

    public adicionar(tributavel: number) {
        this.listaTributaveis.push(tributavel);
    }

    public calcularTributos() {
        let somatorio = 0;

        for(var i = 0; i < this.listaTributaveis.length; i++)
        { 
            somatorio += this.listaTributaveis[i]; 
        }

        return somatorio;
    }
}

class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number){
        this._nome = nome;
        this._saldo = saldo;
    }


    public get nome(): string{
        return this._nome;
    }

    public setNome(nome: string): void {
        this._nome = nome;
    }

    public get saldo(): number{
        return this._saldo;
    }

    public setSaldo(saldo: number): void {
        this._saldo = saldo;
    }
}

interface Tributavel {
    calculaTributos(): number;
}

class ContaCorrente extends Conta implements Tributavel{
    public calculaTributos(): number {
        return this.saldo * 0.1;
    }
}

class SegurodeVida implements Tributavel {
    public calculaTributos(): number {
        return 50;
    }
}
