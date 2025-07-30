window.addEventListener('load', function() {
  this.alert('Assine nossos termos de uso')
})

window.addEventListener('beforeunload', function(e) {
  e.returnValue = 'Tem certeza que deseja sair sem finalizar o cadastro ?';
})