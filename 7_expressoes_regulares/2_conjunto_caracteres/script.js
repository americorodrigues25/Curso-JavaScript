const reg1 = /[123456]/;

console.log(reg1.test('O numero 9 esta aqui ?'));

console.log(reg1.test('O numero 15 esta aqui ?'));

const reg2 = /[0-9]/;

console.log(reg2.test('Temos o numero 65?'));