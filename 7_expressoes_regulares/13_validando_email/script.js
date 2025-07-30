const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test('americo@gmail.com'));
console.log(validarEmail.test('americo@gmail'));
console.log(validarEmail.test('gmail.com'));