class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }
  latir() {
    console.log("Au Au");
  }
}

let pusg = new Cachorro(4, 'Pug');

console.log(pusg.patas);

pusg.latir();

console.log(new Cachorro instanceof Mamifero)

// insranceof é usado para verificar a que estancia saiu aquele objeto