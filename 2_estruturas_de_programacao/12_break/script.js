//utilizamos break para encerrar um loop antes que complete
//todo o seu ciclo

let nome = "Americo";
for (let i = 0; i < 10; i = i + 1) {

  if (i == 3) {
    nome = "Livia";
  }

  if (i == 5 && nome == "Livia") {
    console.log("O nome é Livia, pode parar");
    break;
  }

  console.log(i);
}
