const reg1 = new RegExp('bola');

console.log(reg1.test('tem bola ?'));
console.log(reg1.test('não tem'));

const reg2 = /bola/;

console.log(reg2.test('Tem bola?'));
console.log(reg2.test('não tem'));