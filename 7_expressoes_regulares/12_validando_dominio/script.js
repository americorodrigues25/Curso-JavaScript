const validarDominio = /\[?www.]\w+\.com.br|.com/;

console.log(validarDominio.test('www.google.com'));
console.log(validarDominio.test('www.americorodrigues.com'));
console.log(validarDominio.test('www.horadecodar'));
console.log(validarDominio.test('horadecodar.com'));