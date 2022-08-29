/* Questão 07) Considerando o exemplo da classe Retangulo dos slides, implemente um método adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro. */

class Retangulo {
    l1: number = 0;
    l2: number = 0;
    calcularArea(): number {
      return this.l1 * this.l2;
    }
    calcularPerimetro(): number {
      return (this.l1 * 2) + (this.l2 * 2)
     }
}

class TestaRetangulo {
  let r01 : Retangulo;
  r01 = new Retangulo();
  r01.l1 = 250;
  r01.l2 = 200;

  exibePetrimetro(): number {
    console.log(r01.calcularPerimetro());
  }
}
