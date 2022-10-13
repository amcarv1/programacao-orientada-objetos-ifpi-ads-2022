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
        if (this.estaVivo(jogadorRival.pontosJogador, jogadorRival)){
            jogadorRival.pontosJogador = (jogadorRival.pontosJogador - this.calcularAtaque());
        }   
    }

    estaVivo(pontosLuta : number, jogador: Jogador) : boolean{
        if (pontosLuta > 0){
            return true;
        } else {
            console.log(`${jogador} já está morto!`);
            return false;
        }
    }

    toString() : String{
        return `Level do Jogador = ${this.nivelJogador}\nForça do Jogador ${this.forcaJogador}\nTotal de Pontos = ${this.pontosJogador}`;
    }
    
}

let j1: Jogador = new Jogador(10,5, 50);
let j2: Jogador = new Jogador(5,5, 50);

console.log('-=-= Pré-luta -=-=');
console.log(j1.toString(), j2.toString());
console.log('-=-= Luta 01 -=-=');
j2.atacar(j1);
j2.atacar(j1);
console.log(j1.toString(), j2.toString());
console.log('-=-= Luta 02 -=-=');
j1.atacar(j2);
console.log(j1.toString(), j2.toString());
