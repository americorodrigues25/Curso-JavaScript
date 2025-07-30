// Divide uma string por um separador e retorna um array

let frase = 'testando o metodo split';
console.log(frase.split(' '));

let nomeCompleto = "Américo  Rodrigues";
let partes = nomeCompleto.split(" ").filter(Boolean);

console.log(partes);
console.log("Primeiro nome:", partes[0]);
console.log("Sobrenome:", partes[1]);

// filter(Boolean)
// Usado em arrays para remover valores "falsy" ("", 0, null, undefined, false, NaN).
// Útil após um split(" "), pois remove strings vazias criadas por múltiplos espaços.