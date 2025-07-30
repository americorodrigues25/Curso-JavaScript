// Junta elementos de um array em uma frase, por meio de um separador
let frase = 'testando o método join';

let palavras = frase.split(' ');

let novaFrase = palavras.join('@');
console.log(novaFrase);