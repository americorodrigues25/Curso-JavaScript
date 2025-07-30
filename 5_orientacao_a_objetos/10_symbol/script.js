class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro("Labrador", "Amarelo");

console.log(labrador);

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//acessando symbol

console.log(Cachorro.prototype[patas]);

/*Symbol() é um tipo de dado especial que cria identificadores únicos. Mesmo que dois Symbol() tenham a mesma descrição, eles nunca são iguais.*/
