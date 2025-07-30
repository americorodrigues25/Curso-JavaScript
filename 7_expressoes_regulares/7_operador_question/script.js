const padrao = /abacax?i/;

console.log(padrao.test("abacai"));
console.log(padrao.test('abacaxi'));

const padrao2 = /\d\w?/;

console.log('pulando linha');

console.log(padrao2.test('123'));
console.log(padrao2.test('123a'));
console.log(padrao2.test('aas'));

// Quando colocamos o '?' significa que pode ter "tal" coisa ou não