let x = document.querySelector(".x");
let o = document.querySelector(".o");
let box = document.querySelectorAll(".box");
let button = document.querySelectorAll("#buttons-container button");
let messageContaier = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let gameOver = false;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < box.length; i++) {
  // quando alguem clica na caixa
  box[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    if (this.childNodes.length == 0 && !gameOver) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      //computar jogadas
      if (player1 == player2) {
        player1++;

        if (secondPlayer === "ai-player") {
          //funcao para executar jogada
          computerPlayers();
          player2++;
        }
      } else {
        player2++;
      }

      checkWinCondition();
    }
  });
}

//evento para saber se é 2 players ou IA
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (j = 0; j < button.length; j++) {
      button[j].style.display = "none";
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 500);
  });
}

//ve quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    //x
    el = x;
  } else {
    //0
    el = o;
  }

  return el;
}

// Lógica para ver quem ganhou

function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // horizonatal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b2child = b2.childNodes[0].className;
    let b3child = b3.childNodes[0].className;

    if (b1child == "x" && b2child == "x" && b3child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b1child == "o" && b2child == "o" && b3child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4child = b4.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b6child = b6.childNodes[0].className;

    if (b4child == "x" && b5child == "x" && b6child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b4child == "o" && b5child == "o" && b6child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7child = b7.childNodes[0].className;
    let b8child = b8.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b7child == "x" && b8child == "x" && b9child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b7child == "o" && b8child == "o" && b9child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  //vertical
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b4child = b4.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if (b1child == "x" && b4child == "x" && b7child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b1child == "o" && b4child == "o" && b7child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2child = b2.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b8child = b8.childNodes[0].className;

    if (b2child == "x" && b5child == "x" && b8child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b2child == "o" && b5child == "o" && b8child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3child = b3.childNodes[0].className;
    let b6child = b6.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b3child == "x" && b6child == "x" && b9child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b3child == "o" && b6child == "o" && b9child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  // diagonal
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b1child == "x" && b5child == "x" && b9child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b1child == "o" && b5child == "o" && b9child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3child = b3.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if (b3child == "x" && b5child == "x" && b7child == "x") {
      // x
      declareWinner("x");
      gameOver = true;
    } else if (b3child == "o" && b5child == "o" && b7child == "o") {
      // o
      declareWinner("o");
      gameOver = true;
    }
    // deu velha
    else {
      let counter = 0;

      for (i = 0; i < box.length; i++) {
        if (box[i].childNodes[0] != undefined) {
          counter++;
        }
      }
      if (counter === 9) {
        declareWinner();
        gameOver = true;
      }
    }
  }
}

// limpa o jogo, declara o vencedor e atualiza o placar

let scoreX = 0; // Placar do jogador X
let scoreO = 0; // Placar do jogador O

// Função para resetar o jogo (sem perder o placar)
function resetGame() {
  box.forEach((cell) => {
    cell.innerHTML = "";
  });

  player1 = 0;
  player2 = 0;
  gameOver = false;
  messageContaier.classList.add("hide");
}

function declareWinner(winner) {
  if (winner === "x") {
    scoreX++; // Incrementa a pontuação do jogador X
    messageText.innerText = "Jogador X venceu!";
  } else if (winner === "o") {
    scoreO++; // Incrementa a pontuação do jogador O
    messageText.innerText = "Jogador O venceu!";
  } else {
    messageText.innerText = "Empate!";
  }

  // Atualiza a exibição do placar
  updateScore();

  // Exibe a mensagem
  messageContaier.classList.remove("hide");

  // Reinicia o jogo após um tempo (sem recarregar a página)
  setTimeout(resetGame, 3000);
}

// Função para atualizar o placar no HTML
function updateScore() {
  document.getElementById("scoreX").innerText = scoreX;
  document.getElementById("scoreO").innerText = scoreO;
}

//executar a lógica para jogada da IA
function computerPlayers() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < box.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    //só preencher se estiver vazio o filho
    if (box[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        box[i].appendChild(cloneO);
        counter++;
        break;
      }
      //checagem de quantas estão preenchidas
    } else {
      filled++;
    }
  }
  if (counter == 0 && filled < 9) {
    computerPlayers();
  }
}
