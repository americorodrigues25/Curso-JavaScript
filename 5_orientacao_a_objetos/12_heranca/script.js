class mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new mamifero(4);

console.log(coiote.patas);

class Cachorro extends mamifero {
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

/*O super é usado dentro de classes que herdam de outra classe para chamar o construtor ou métodos da classe pai (superclasse).*/