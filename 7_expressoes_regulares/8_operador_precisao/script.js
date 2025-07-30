const cep = /\d{5}-\d{3}/;

console.log(cep.test('08674-250'));
console.log(cep.test('08674250'));
console.log(cep.test('ass'))

console.log('Pulando linha');

const numero = /\d{5}-\d{4}/;

console.log(numero.test('99629-7947'));
console.log(numero.test('996297947'));