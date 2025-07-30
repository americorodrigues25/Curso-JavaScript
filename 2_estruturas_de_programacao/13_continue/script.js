//O continue no JavaScript é usado dentro de loops (for, while, do...while) para pular
// a execução do código que vem depois dele e ir direto para a próxima iteração do loop.
for(let i = 10; i >0; i = i - 1) {
  if(i % 2 == 0) {
    console.log(`${i} é numero par e caiu no continue`)
    continue;
  }

  console.log(i);
}