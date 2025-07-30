const carro = {
  modelo: "siena",
  marca: function () {
    console.log("fiat");
  },
  marca2: function () {
    console.log("bmw");
  },
  cor: 'Não definido',
  setCor: function(cor) {
    this.cor = cor;
  }
};

console.log(carro.modelo);
console.log(carro.marca2());

console.log(carro.cor);
carro.setCor('cinza')
console.log(carro.cor);



console.log('----------------------');

let pessoa = {
  nome: '',
  setNome: function(novoNome) {
    this.nome = novoNome;
  },
  getNome: function() {
    return this.nome;
  }
}

pessoa.setNome('Américo');

console.log(pessoa.getNome());