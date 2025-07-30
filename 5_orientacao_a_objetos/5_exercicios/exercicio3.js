class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set atualizarRua(novaRua) {
    this.rua = novaRua;
  }

  set atualizarBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set atualizarCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set atualizarEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

// Criando um endereço inicial
const enderecoCliente = new Endereco(
  "Principe Feliz, 225",
  "Vila Urupes",
  "Suzano",
  "SP"
);

console.log(enderecoCliente);

enderecoCliente.atualizarRua = ('Rua Carlos Reis Filho');
console.log(enderecoCliente);

enderecoCliente.atualizarCidade = ('Mogi das Cruzes');
console.log(enderecoCliente);