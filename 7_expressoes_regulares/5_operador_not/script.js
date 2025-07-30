const notab = /[^ab]/;

console.log(notab.test('a'));
console.log(notab.test('Aqui tem a'));

console.log('pulando linha')

const notAaZ = /[a-z]/;
console.log(notAaZ.test('123 as'));
console.log(notAaZ.test('adjhudsadss5'));
console.log(notAaZ.test('123'))

console.log('pulando linha')

const az = /[^a-z]/;
console.log(az.test('123 as'));
console.log(az.test('adjhudsadss5'));
console.log(az.test('123'))