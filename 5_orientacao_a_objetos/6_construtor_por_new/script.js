function Cachorro(raca, cor) {
  this.raca = raca;
  this.cor = cor;
  this.latir = function () {
    console.log("Au Au");
  };
}

let husky = new Cachorro("Husky", "cinza");

husky.latir();
console.log(husky);

// ✔ Propriedades → Guardam informações (nome, idade).
// ✔ Métodos → Executam ações (dizerOi()).
// ✔ Métodos precisam de () para serem chamados, propriedades não.
