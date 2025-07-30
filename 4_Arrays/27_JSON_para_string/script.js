// Podemos converter o JSON para uma string de forma facil ou vice versa

let pessoa = {
    "idade": 26,
    "nome": "Americo",
    "profissao": "Desenvolvedor",
    "marcasFavoritas": ["Nike", "Adidas", ]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
console.log('teste');
console.log(pessoa);