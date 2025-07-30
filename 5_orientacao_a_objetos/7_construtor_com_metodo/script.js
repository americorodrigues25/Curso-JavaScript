function Cachorro(raca, cor) {
  this.raca = raca;
  this.cor = cor;
}

Cachorro.prototype.uivar = function() {
  console.log('Auuuuuu')
}

let husky = new Cachorro("Husky", "cinza");

husky.uivar();
console.log(husky);
