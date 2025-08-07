let elementoHTML;
let numeroSecreto = 0;
let numeroUsuario = 0;
let numeroIntentos = 0;
let numeroGenerado = 0;
let numeroMaximo = 10;
let listaNumeroGenerados = [];

function asignarTextoElemento(elemento, texto) {
    elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
            
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'El número secreto.');
    asignarTextoElemento('p', `Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    numeroUsuario = 0;
}

function generarNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroGenerados);
    // Aún hay números disponibles ?
    if (listaNumeroGenerados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya no hay números disponibles');
        return;
    } else {
        // El número generado está en la lista ?
        if (listaNumeroGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

condicionesIniciales();
