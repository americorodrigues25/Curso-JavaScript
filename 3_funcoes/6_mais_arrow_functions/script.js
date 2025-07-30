//Se só tem um parâmetro podemos remover os parênteses do argumento e o return;
// se a expressão for pequena podemos fazer em uma linha só

const multiplicar = (x) => {
  return x * 2;
};

console.log(multiplicar(2));

const multiplicar2 = x => x * 2;
console.log(multiplicar2(4));