// As promisses são ações assincrona que podem produzir um valor em algum momento do codigo
// Uma forma de dizer a linguagem que um valor pode estar presente em u futuro do codigo
// O objeto das promises é Promise, resolve é o método que resolve uma promise, o then é o que faz ela poder ser executada em um ponto futuro

let p = Promise.resolve(5);

console.log('Outros códigos');

console.log(p);

p.then((value) => {console.log(`O valor é: ${value}`)});