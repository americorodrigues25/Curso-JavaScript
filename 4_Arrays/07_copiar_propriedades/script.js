let carro = {
  portas: 2,
  portamalas: "200L",
  motor: 2.0,
};

let adicionais = {
  tetoSolar: true,
  arCondicionado: true,
};

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);

// Object.assign copia propriedades de um objeto para o objeto principal
