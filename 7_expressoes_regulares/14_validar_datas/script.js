const validarData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

console.log(validarData.test('15/07/1998'));
console.log(validarData.test('15/7/1998'));
console.log(validarData.test('15-07-1998'));

console.log(validarData.test('15/13/1998'));
console.log(validarData.test('15/12/1998'));