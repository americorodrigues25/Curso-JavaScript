function saudacao (nome) {
  if(typeof nome != 'string') {
    throw new Error('o parãmetro nome precisa ser uma string')
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao('Américo');
saudacao(5);

console.log('teste')

/*throw é uma instrução que interrompe a execução normal do código e lança um erro.
new Error('mensagem') cria um objeto de erro com a mensagem personalizada.*/