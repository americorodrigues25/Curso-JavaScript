/* As promises podem falhas, para reter esse erro utiliza-se catch*/

let p = Promise.resolve(new Error("não deu certo"));

console.log("Código sendo executado");

p.then((value) => console.log(value)).catch((reason) =>
  console.log("Falhou: " + reason)
);
