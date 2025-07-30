class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  locationbar() {
    console.log("Au Au");
  }

  get getCor() {
    return this.cor;
  }
  set setCor(cor) {
    this.cor = cor;
  }
}

let pastor = new Cachorro("Pastor Alemão", "Sem cor");

console.log(pastor);

pastor.setCor = "Marrom";

console.log(pastor.getCor);

/* Getters (get)
São usados para obter o valor de uma propriedade. Eles funcionam como uma função, mas são acessados como se fossem uma propriedade.

Setters (set)
São usados para definir ou modificar uma propriedade, permitindo validar ou manipular os dados antes de armazená-los. */

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this._preco = preco; // Usamos _ para indicar que não deve ser acessado diretamente
  }

  get preco() {
    return `R$ ${this._preco.toFixed(2)}`;
  }

  set preco(valor) {
    if (valor < 0) {
      console.error("O preço não pode ser negativo!");
      return;
    }
    this._preco = valor;
  }
}

const item = new Produto("celular", 1999.99);
console.log(`O ${item.nome} tem o valor de: ${item.preco}`); // R$ 1999.99

item.preco = -500; // O preço não pode ser negativo!
item.preco = 2500;
console.log(`Valor atualizado do ${item.nome}: ${item.preco}`); // R$ 2500.00

/*Getters e setters são métodos especiais usados para acessar (get) e modificar (set) propriedades de um objeto de forma controlada.*/
//✔ Getter (get) → Obtém um valor como se fosse uma propriedade.
//✔ Setter (set) → Define um valor e pode incluir validações.