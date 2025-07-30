function multiplicarNumeros(a, b, c) {
  return a * b * c;
}

console.log(multiplicarNumeros(2, 3, 4));

function podeDirigir(idade, temCnh) {
  if (idade >= 18 && temCnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("não pode dirigir");
  }
}

podeDirigir(18, true);
