/*O try...catch em JavaScript é usado para tratar erros de forma segura, evitando que um programa quebre inesperadamente. 
Ele funciona tentando executar um bloco de código (try) e, caso ocorra um erro, captura esse erro no bloco catch.*/

try {
  let a = 2 + b;
} catch (e) {
  console.log(e);
}

console.log("teste");

try {
  let resultado = 10 / 0; // Isso não gera erro, mas retorna Infinity
  console.log(resultado);

  let x = y + 1; // Aqui ocorre um erro (y não está definido)
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}

/* Muito usado para conseguir se ominicar com o usuario de uma forma mais bonita */
