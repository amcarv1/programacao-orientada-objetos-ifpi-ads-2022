class Equipamento {
    ligado : boolean
    constructor (ligado : boolean) {
        this.ligado = ligado;
    }

    liga() {
        if (this.ligado) {
            console.log('Já está ligado!');
        }   else {
                this.ligado = true;
            }
    }

    desliga() {
        if(!this.ligado) {
            console.log('Já está desligado!');
        }   else {
                this.ligado = false;
            }
    }

    inverte(){
        if (this.ligado) {
            this.ligado = false;
        } else {
            this.ligado = true;
        }
    }

    estaLigado(){
        return this.ligado;
    }
}

let e1: Equipamento = new Equipamento(true);
console.log(e1.estaLigado());
e1.liga();
e1.desliga();
console.log(e1.estaLigado());
e1.inverte();
console.log(e1.estaLigado());
