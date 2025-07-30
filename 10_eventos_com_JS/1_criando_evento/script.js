let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2');

btn.addEventListener('click', function() {
    console.log('clicou aqui!');
});

btn2.addEventListener('click', () => {
    alert('Clicou no segundo botão !')
});