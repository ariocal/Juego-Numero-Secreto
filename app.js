let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", "Indica un numero del 1 al 10");

function verificarIntento() {
  let numeroDeUsario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroSecreto);
  console.log(numeroDeUsario);
  if (numeroDeUsario === numeroSecreto) {
    asignarTextoElemento("h1", "GANASTE EL JUEGO");
    asignarTextoElemento("p",`Acertaste el numero usando ${intentos} ${intentos == 1 ? "intento" : "intentos" }`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", "Indica un numero del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
