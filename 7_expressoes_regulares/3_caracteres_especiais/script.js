/* CARACTERES ESPECIAIS (REGEX)

/d - Qualquer digito de caractere
/w - Um caractere alfanumerico ('teste')
/s - Qualquer caractere de espaço em branco
/D - caracteres que não são digitos
/W - caractere não-alfanumerico
/S caractere que nãõ seja espaço em branco
. - Qualquer caractere, menos nova linha */

const texto = "Teste 123 !@#\nNova linha";

// \d - Qualquer dígito numérico
console.log(texto.match(/\d/g)); // ["1", "2", "3"]

// \w - Qualquer caractere alfanumérico (letras e números)
console.log(texto.match(/\w/g)); // ["T", "e", "s", "t", "e", "1", "2", "3"]

// \s - Qualquer caractere de espaço em branco (espaços, tab, nova linha)
console.log(texto.match(/\s/g)); // [" ", "\n"]

// \D - Qualquer caractere que não seja um dígito
console.log(texto.match(/\D/g)); // ["T", "e", "s", "t", "e", " ", "!", "@", "#", "\n", "N", "o", "v", "a", " ", "l", "i", "n", "h", "a"]

// \W - Qualquer caractere não alfanumérico (espaços, símbolos, pontuações)
console.log(texto.match(/\W/g)); // [" ", "!", "@", "#", "\n", " "]

// \S - Qualquer caractere que não seja espaço em branco
console.log(texto.match(/\S/g)); // ["T", "e", "s", "t", "e", "1", "2", "3", "!", "@", "#", "N", "o", "v", "a", "l", "i", "n", "h", "a"]

// . - Qualquer caractere, menos nova linha
console.log(texto.match(/./g)); // ["T", "e", "s", "t", "e", " ", "1", "2", "3", " ", "!", "@", "#", "N", "o", "v", "a", " ", "l", "i", "n", "h", "a"]
