class Jogador {

    forcaJogador : number;
    nivelJogador: number;
    pontosJogador: number;
    
    constructor(forcaJogador : number, nivelJogador : number, pontosJogador : number) {
        this.forcaJogador = forcaJogador;
        this.nivelJogador = nivelJogador;
        this.pontosJogador = pontosJogador;
    }

    calcularAtaque() {
        return this.forcaJogador * this.nivelJogador;
    }

    atacar(jogadorRival: Jogador){
        if (this.estaVivo(jogadorRival.pontosJogador)){
            jogadorRival.pontosJogador = (jogadorRival.pontosJogador - this.calcularAtaque());
        }   else {
            console.log('O jogador já está morto!');
        }
    }

    estaVivo(pontosJogador : number) : boolean{
        if (pontosJogador > 0){
            return true;
        } else {
            return false;
        }
    }

    toString() : String{
        return `Level do Jogador = ${this.nivelJogador}\nForça do Jogador ${this.forcaJogador}\nTotal de Pontos = ${this.pontosJogador}`;
    }
    
}

let j1: Jogador = new Jogador(10,5, 50);
let j2: Jogador = new Jogador(5,5, 50);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
j1.atacar(j2);
console.log(j1.toString());
console.log(j2.toString());
