let numeroSecreto = 0;
let intentos =0;
let listaNumeroSorteado =[];
let numeroMaximo =10;

function asignarTextoElemento(elemento, texto){
    let elemenHTML = document.querySelector(elemento);
    elemenHTML.innerHTML =(texto);
    return;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
    }
    else {
        asignarTextoElemento ('p', 'El número secreto es mayor');
    }
    intentos ++; 
    limpiarCaja()
}
    return;
}
function limpiarCaja (){
    document.querySelector('#valorUsuario'). value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista 
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    // si ya sorteamos todos los números
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento ('p','ya se sortearon todos los números posibles')
    }
    else {

        if (listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
         }
        else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    }      
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto'); 
    asignarTextoElemento('p', `indica un número del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inciio de intervalo de número
    //Generar el número aleatorio
    //Inicializar el numero de intentos
   condicionesIniciales();
    //deshabilitar el boton de "nuevo juego"
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
