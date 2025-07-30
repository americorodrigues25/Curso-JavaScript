// podemos definir variaveis com propriedades do objeto com uma notação diferente, chamada destructuring

let obj = {
  rodas: 4,
  portas: 5,
  tetoSolar: true,
  motor: '2.0'
}

const {rodas: vRodas, portas: VPrtas, tetoSolar: VTetoSolar, motor: VMotor} = obj;

console.log(vRodas);
console.log(VMotor);