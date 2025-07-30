const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);

const cachorro = Object.create(pessoa);
cachorro.raca = 'boxer';

console.log(cachorro.raca);

/*O prototype em JavaScript é um mecanismo que permite que objetos herdem propriedades e métodos de outros objetos.*/