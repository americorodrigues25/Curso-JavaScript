function chegarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
   alert("Passe só numeros para o programa");
  } else {
    return number;
  }
}


let number = prompt('Digite um numero');
chegarNumero(number);