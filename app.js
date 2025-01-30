let numero = 0;
let vidas = 3;
function asignarTextoElemento(elemento, texto){
    let title = document.querySelector(elemento);
    title.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*10) + 1;
    return numeroSecreto;
}


function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);  
    contador ++;
    if (numeroDeusuario === numero) {
        asignarTextoElemento('p','Acertaste el número en el intento ' + contador + ' ' + ((contador === 1) ? 'vez' : 'veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeusuario > numero) {
            asignarTextoElemento('p','El número es menor te que dan '+ (vidas - contador) + ' vidas');
        } else {
            asignarTextoElemento('p','El número es mayor te que dan ' + (vidas - contador) + ' vidas');
        }
        if (contador == 3) {
            alert('ya no tienes mas intentos, el numero secreto se reinicio');
            reinicio();
        }
        limpiar();
    }
}

function limpiar() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reinicio() {
    numero = generarNumeroSecreto();
    limpiar();
    contador = 0;
    vidas = 3;
    asignarTextoElemento('p','indica un número del 1 al 10');    console.log(numero);
    document.getElementById('reiniciar').setAttribute('disabled','true');
}




asignarTextoElemento('h1','juego del número secreto');
reinicio();
console.log(numero)

