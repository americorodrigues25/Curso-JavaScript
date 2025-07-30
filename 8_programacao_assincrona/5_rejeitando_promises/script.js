/* o método reject é utilizado quando determinada lógica não satisfaz nosso programa, podemos ir para outra lógica com o reject*/

function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num === 2) {
      resolve(console.log(`O numero é: ${num}`));
    } else {
      reject(new Error("Falhou"));
    }
  });
}
console.log(verificarNumero(2));
console.log(verificarNumero(5));

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

// Simulando uma requisição assíncrona para buscar um produto
function buscarProduto(id) {
  return new Promise((resolve, reject) => {
    console.log("Buscando produto...");

    setTimeout(() => {
      const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Smartphone", preco: 2800 },
      ];

      const produto = produtos.find((p) => p.id === id);

      if (produto) {
        resolve(produto); // Se encontrou, chama resolve com o produto
      } else {
        reject("Produto não encontrado."); // Se não encontrou, chama reject com erro
      }
    }, 2000); // Simula 2 segundos de atraso
  });
}

// Callback para processar o produto
function exibirProduto(produto) {
  console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`);
}

// Callback para lidar com erros
function lidarComErro(erro) {
  console.error("Erro:", erro);
}

// Usando a Promise
buscarProduto(1)
  .then(exibirProduto) // Se der certo, exibe o produto
  .catch(lidarComErro) // Se der erro, trata o erro
  .finally(() => console.log("Operação finalizada."));
