let arr1 = [5,10,15,20,25];
let arr2 = ['Americo', 'carla', 'maya'];

function verificarElementos(verificar){
    if(verificar.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}

verificarElementos(arr1);
verificarElementos(arr2);