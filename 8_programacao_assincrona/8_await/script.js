/* O await em JavaScript é usado para esperar que uma Promise (algo que representa uma operação assíncrona) seja resolvida antes de continuar
a execução do código. Ele só pode ser usado dentro de uma função marcada com async.*/
/* Quando você usa o await, ele pausa a execução da função até que a Promise seja resolvida (ou rejeitada). Isso facilita trabalhar com código
assíncrono, pois você pode escrever de forma mais sequencial, como se fosse síncrono, mas sem bloquear o restante do programa.*/

function soarComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 4000);
  });
}

async function resSoma(a, b, c) {
  let x = soarComDelay(a, b);
  let y = c;

  return (await x) + y;
}

resSoma(1, 2, 3).then((value) => console.log(value));
