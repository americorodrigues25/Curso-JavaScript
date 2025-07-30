let nomes = ["Americo", "Livia", "carla", "Marina", "Maya"];
for (let i = 0; i <= nomes.length; i++) {
  console.log(nomes[i]);
}

let sobrenomes = ["Rodrigues", "maximo", "Costa"];
for (let i = 0; i < sobrenomes.length; i++) {
  console.log(sobrenomes[i].toUpperCase());
}

let numeros = [5, 10, 15, 20, 25];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

let numeross = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

while (i < numeross.length) {
  if (numeross[i] % 2 === 0) {
    console.log(numeross[i]); // Exibe apenas os números pares
  }
  i++;
}
