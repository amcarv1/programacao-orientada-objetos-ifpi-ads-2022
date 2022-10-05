class Saudacao {
    texto : string
    destinatario : string

    constructor (texto : string, destinatario : string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao() : string {
        return `${this.texto} ${this.destinatario}`;
    }

}

let s01 : Saudacao = new Saudacao("Olá, ", "João");
console.log(s01.obterSaudacao());
