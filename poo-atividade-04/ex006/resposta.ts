class Triangulo {
    ladoA : number
    ladoB : number
    ladoC : number

    constructor(ladoA : number, ladoB : number, ladoC : number) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    formaTriangulo(ladoA : number, ladoB : number, ladoC : number){
            if ( ((this.ladoB - this.ladoC) < this.ladoA) && ((this.ladoB + this.ladoC) > this.ladoA)){
                return true;
            } else {
                return false
            }
        }

    ehIsoceles(ladoA : number, ladoB : number, ladoC : number) {
        if (this.formaTriangulo(ladoA,ladoB,ladoC)){
            if ((this.ladoA == this.ladoB) || (this.ladoA == this.ladoC) || (this.ladoB == this.ladoC)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    ehEquilatero(la : number, ladoB : number, ladoC : number) {
        if (this.formaTriangulo(la,ladoB,ladoC)){
            if ((this.ladoA == this.ladoB) && (this.ladoA == this.ladoC)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    ehEscaleno(la : number, ladoB : number, ladoC : number) {
        if (this.formaTriangulo(la,ladoB,ladoC)){
            if ((this.ladoA != this.ladoB) && (this.ladoA != this.ladoC) && (this.ladoB != this.ladoC)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

let t1: Triangulo = new Triangulo(5,4,3);
console.log(t1.formaTriangulo());  
console.log(t1.ehIsoceles());  
console.log(t1.ehEquilatero());  
console.log(t1.ehEscaleno());  

let t2: Triangulo = new Triangulo(14,6,3);
console.log(t2.formaTriangulo());  
console.log(t2.ehIsoceles());  
console.log(t2.ehEquilatero());  
console.log(t2.ehEscaleno());  
