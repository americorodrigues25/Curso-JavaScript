// Umas das vertentes da prog. Assincrona é fazer ações que aconteçam depois de um tempo por meio de calbacks
// Calback é uma função que faz uma ação após algum acontecimento no código

console.log('Ainda não chamou o callback');

setTimeout(function() {
    console.log('Chamou o callback');
}, 2000);

console.log('Ainda não chamou o callback');