function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let doberman = criarCachorro('Doberman', '4', 'Cinza');
let pastorAlemao = criarCachorro('Pastor Alemão', 4, 'Caramelo e preto');
let boxer = criarCachorro('Boxer', 4, 'Marrom');

console.log(doberman);
console.log(pastorAlemao);
console.log(boxer);