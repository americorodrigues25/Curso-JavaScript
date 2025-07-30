function detectarDados(dados) {
  if (typeof dados === 'number') {
    console.log("Você inseriu um number");
  } else if (typeof dados === 'boolean') {
    console.log("Você inseriu um boolean");
  } else if (typeof dados === 'string') {
    console.log("Você inseriu uma string");
  }
}

detectarDados(25);
detectarDados("Americo");
detectarDados(true);
