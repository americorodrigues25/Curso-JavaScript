//Repõe um antigo elemento no DOM, com um novo

let novoElemento = document.createElement("p");
let texto = document.createTextNode("mais um texto");

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);