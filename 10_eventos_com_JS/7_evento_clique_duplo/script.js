let btn = document.querySelector('#btn');

btn.addEventListener('mousedown', function(){
  console.log('Apertou o botão')
});

let btn2 = document.querySelector('#btn2')

btn2.addEventListener('dblclick', function() {
  console.log('Clique duplo')
});

btn2.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log('Botão direito');
})