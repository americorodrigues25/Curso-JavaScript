let lista = document.createElement("ul");

for (i = 0; i < 5; i++) {
  let item = document.createElement("li");

  let texto = document.createElement("texto-lista" + i);

  item.appendChild(texto);

  lista.appendChild(item);
}

let container = document.getElementsByClassName('container-principal');

container.appendChild(lista);