/* Questão 09) Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois atributos e exiba o resultado do método saldo(). */

class SituacaoFinanceira {
    valorCreditos: number = null;
    valorDebitos: number = null;
    
    saldo(): number {
      return (this.valorCreditos - this.valorDebitos);
    }
}

let sf01 : SituacaoFinanceira;
sf01 = new SituacaoFinanceira();
sf01.valorCreditos = 300;
sf01.valorDebitos = 200;
console.log(sf01.saldo());
