let validarUsuarios = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuarios.test('americo_2025'));
console.log(validarUsuarios.test('americo-rodrigues25'));
console.log(validarUsuarios.test('a2'))