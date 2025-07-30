let validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test('Marca: Nike'));
console.log(validarMarca.test('Marca: Puma'));
console.log(validarMarca.test('Puma'));
console.log(validarMarca.test('Marca: New Era'));