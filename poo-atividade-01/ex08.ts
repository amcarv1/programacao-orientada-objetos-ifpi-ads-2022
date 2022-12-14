/* Questão 08) Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que calculam a área e o perímetro. Instancie um objeto dessa classe, 
atribua um valor ao raio e exiba a área e o perímetro chamando os dois métodos definidos. */

class Circulo {
    raio: number = null;
    
    calcularArea(): number {
      return ((this.raio ** 2) * 3.14);
    }
    
    calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

let c01 : Circulo;
c01 = new Circulo();
c01.raio = 3;

console.log(c01.calcularArea());
console.log(c01.calcularPerimetro());
