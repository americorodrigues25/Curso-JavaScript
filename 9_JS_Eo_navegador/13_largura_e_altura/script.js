let elemento = document.querySelector('#titulo-principal');

//Considera as bordas
console.log('Largura: ' + elemento.offsetWidth );
console.log('Altura: ' + elemento.offsetHeight);

//Não considera as bordas
console.log('Largura' + elemento.clientWidth);
console.log('Altura' + elemento.clientHeight);

