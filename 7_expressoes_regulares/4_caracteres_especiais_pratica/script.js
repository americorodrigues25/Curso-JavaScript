const dia = /\d\d/;

console.log(dia.test("2025") && "2025".length === 2);
console.log(dia.test("asd"));
console.log(dia.test("15") && "15".length === 2);


// outra maneira
console.log('PULANDO LINHA')

const dia2 = /^\d{2}$/

console.log(dia2.test("2025"));
console.log(dia2.test("asd"));
console.log(dia2.test("15"));


console.log('PULANDO LINHA')
const palavrasTresLetras = /^\w{3}$/;

console.log(palavrasTresLetras.test('asd'));
console.log(palavrasTresLetras.test('aasd'));
console.log(palavrasTresLetras.test('as'));