let validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test('127.0.0.1'));
console.log(validarIP.test('8.8.8.8'));
console.log(validarIP.test('192.168.0.62'));

console.log(validarIP.test('192.168.0'));
console.log(validarIP.test('192=168.0.01'));
console.log(validarIP.test('10101010101'));
console.log(validarIP.test('aaa.aaa.a.a'));