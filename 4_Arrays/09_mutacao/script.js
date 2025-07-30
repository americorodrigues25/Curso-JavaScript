let pessoa = {
  nome: 'Americo',
}

let pessoa2 = pessoa;
console.log(pessoa == pessoa2)

pessoa2.nome = 'Livia';
console.log(pessoa.nome);

pessoa.nome = 'Pedro';

console.log(pessoa2.nome);