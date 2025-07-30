let reg = /\d+ID/;
console.log(reg.test('123ID'));

console.log(reg.test('123515'));

console.log(reg.test('asasID'));

console.log(reg.test('ID'));