// Use while quando você não tem certeza se o código precisa ser executado
// pelo menos uma vez. Ou seja, quando a condição pode já ser
// falsa no início.

// Exemplo: esperar até que o usuário insira um valor válido.

let senha = "";
while (senha !== "1234") {
  senha = prompt("Digite a senha:");
}
console.log("Acesso permitido!");

// Use do...while quando você precisa garantir que o código seja executado
// pelo menos uma vez, independentemente da condição inicial.

// Exemplo: exibir um menu pelo menos uma vez antes de verificar a escolha do usuário.

let opcao;
do {
  opcao = prompt("Escolha uma opção:\n1. Continuar\n2. Sair");
} while (opcao !== "2");
console.log("Programa encerrado.");
