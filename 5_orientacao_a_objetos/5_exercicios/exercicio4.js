class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecer(litros) {
    // Corrigido: adicionando um parâmetro
    this.gasolinaRestante += litros; // Corrigido: operador correto "+="
  }
}

// Criando o carro
let carro = new Carro("VW", "cinza", 100, 14);

console.log(carro); // Exibe o carro inicial

// Dirigir 100 km
carro.dirigir(100);
console.log(carro); // Verificar gasolina restante

// Abastecer 10 litros
carro.abastecer(10);
console.log(carro); // Verificar gasolina após abastecimento
