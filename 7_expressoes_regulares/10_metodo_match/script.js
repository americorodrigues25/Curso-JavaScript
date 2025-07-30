// Funciona semelhante ao exec, retorna um conjunto com mais informações

let frase = 'O numero 100 está aqui ?'.match(/\d+/);
console.log(frase)

frase = 'Não tem'.match(/\d+/);
console.log(frase);

console.log('pulando linha');

const frase2 = "Eu tenho 2 maçãs e 3 bananas.";
const numeros = frase2.match(/\d+/g);
console.log(numeros);
// Saída: [ '2', '3' ]