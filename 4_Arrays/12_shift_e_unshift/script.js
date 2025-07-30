// Método shift remove o primeiro elemento do array
// unshift adiciona um ou mais elementos no inicio do array

let carros = ['BMW', 'AUDI', 'VW', 'FIAT'];
let removecarros = carros.shift();
console.log(carros);
console.log(removecarros); 
// Removeu o primeiro item do aray, no caso 'BMW'

carros.unshift('CITROEN');
console.log(carros);
// Adicionou 'CITROEN' no começo do array