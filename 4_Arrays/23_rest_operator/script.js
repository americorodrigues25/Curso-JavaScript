// Uma forma de uma função receber indefinidos parâmetros
// O operador rest vai virar um array
// É definido por um '...nome'

let num = 1;
let num1 = 5;
let num3 = 7;
let num4 = 2;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num, num1, num3, num4);
console.log("pausa");
imprimirNumeros(num1, num4);
console.log("pausa");
imprimirNumeros(1, 5, 4, 78, 63, 8, 9, 20);
console.log('pausa')

const [primeiro, segundo, terceiro, ...resto] = [10, 20, 30, 40, 50, 60, 70];

console.log(primeiro); // 10
console.log(segundo);  // 20
console.log(terceiro)
console.log(resto);    // [30, 40, 50]
