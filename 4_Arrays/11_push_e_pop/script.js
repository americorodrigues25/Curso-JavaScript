// Método push insere um elemento no array
// Método pop remove um elemento do array

let nomes = ['Américo', 'Livia', 'Marcia'];
console.log(nomes);

let elementoRemovido = nomes.pop();
// remove o ultimo item do array, no caso 'Marcia'

console.log(elementoRemovido);
console.log(nomes);

nomes.push('Pedro');
console.log(nomes);
//Insere um elemento no ultimo item do array, no caso 'Pedro'