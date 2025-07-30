let carro = {
    marca: 'VW',
    modelo: 'Gol',
    ano: 2016,
    portas: 5
}

console.log(carro);
console.log(carro.marca)

//deletar item do array ja montado
delete carro.ano
console.log(carro)

//inserir item no array ja montado
carro.potencia = 1.6
console.log(carro)
