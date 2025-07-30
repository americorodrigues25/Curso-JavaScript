// colocamos uma instrução na regex que funciona como || (or) das condicionais

const reg = /\w+: (Americo| Maria| Macario)/;

console.log(reg.test("Nome: Americo"));
console.log(reg.test('Nome: José'));

