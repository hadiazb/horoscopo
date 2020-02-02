window.onload = cargarEventos;
var usuario = [
  {
    "nombre": null,
    "mes"  : null,
    "dia"  : null},
];
function cargarEventos(){
  document.getElementById("botonHorozcopo").addEventListener( "click", nuevaPersona, false);
  document.getElementById("botonHorozcopo").addEventListener( "click", limpiar, false);
}

function nuevaPersona(){
  var introNombre = document.getElementById("nombre").value;
  var introMes   = document.getElementById("mes").value;
  var introDia   = parseInt(document.getElementById("dia").value);
  var nuevaPersona = { "nombre": introNombre, "mes": introMes, "dia":  introDia };
  console.log(nuevaPersona);

  if ((19 < nuevaPersona.dia) && (nuevaPersona.dia < 29) && (nuevaPersona.mes == 'Febrero')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 21) && (nuevaPersona.mes == 'Marzo')
    ||(19 < nuevaPersona.dia) && (nuevaPersona.dia < 29) && (nuevaPersona.mes == 'febrero')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 21) && (nuevaPersona.mes == 'marzo')) {
    console.log('Eres Piscis');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Piscis`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((20 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Marzo')
    ||(20 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'marzo')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 21) && (nuevaPersona.mes == 'Abril')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 21) && (nuevaPersona.mes == 'abril')) {
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Aries`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
    console.log('Eres Aries');
  }else if ((20 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Abril')
    ||(20 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'abril')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 22) && (nuevaPersona.mes == 'Mayo')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 22) && (nuevaPersona.mes == 'mayo')) {
    console.log('Eres Tauro');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Tauro`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((21 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'mayo')
    ||(21 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Mayo')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 22) && (nuevaPersona.mes == 'Junio')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 22) && (nuevaPersona.mes == 'junio')) {
    console.log('Eres Geminis');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Geminis`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((21 < nuevaPersona.dia) && (nuevaPersona.dia < 31) && (nuevaPersona.mes == 'Junio')
    ||(21 < nuevaPersona.dia) && (nuevaPersona.dia < 31) && (nuevaPersona.mes == 'junio')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'Julio')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'julio')) {
    console.log('Eres Cancer');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Cancer`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((23 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Julio')
    ||(23 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'julio')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'Agosto')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'agosto')) {
    console.log('Eres Leo');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Leo`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((23 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Agosto')
    ||(23 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'agosto')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'Septiembre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'septiembre')) {
    console.log('Eres Virgo');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Virgo`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((23 < nuevaPersona.dia) && (nuevaPersona.dia < 31) && (nuevaPersona.mes == 'Septiembre')
    ||(23 < nuevaPersona.dia) && (nuevaPersona.dia < 31) && (nuevaPersona.mes == 'septiembre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'Octubre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 24) && (nuevaPersona.mes == 'octubre')) {
    console.log('Eres Libra');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Libra`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((23 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Octubre')
    ||(23 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'octubre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 23) && (nuevaPersona.mes == 'Noviembre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 23) && (nuevaPersona.mes == 'noviembre')) {
    console.log('Eres Escorpión');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Escorpion`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((23 < nuevaPersona.dia) && (nuevaPersona.dia < 31) && (nuevaPersona.mes == 'Noviembre')
    ||(23 < nuevaPersona.dia) && (nuevaPersona.dia < 31) && (nuevaPersona.mes == 'noviembre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 22) && (nuevaPersona.mes == 'Diciembre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 22) && (nuevaPersona.mes == 'diciembre')) {
    console.log('Eres Sagitario');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Sagitario`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((21 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Diciembre')
    ||(21 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'diciembre')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 21) && (nuevaPersona.mes == 'Enero')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 21) && (nuevaPersona.mes == 'enero')) {
    console.log('Eres Capricornio');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Capricornio`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else if ((20 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Enero')
    ||(20 < nuevaPersona.dia) && (nuevaPersona.dia < 32) && (nuevaPersona.mes == 'enero')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 20) && (nuevaPersona.mes == 'Febrero')
    ||(0 < nuevaPersona.dia) && (nuevaPersona.dia < 20) && (nuevaPersona.mes == 'Febrero')) {
    console.log('Eres Acuario');
    var titulo = document.getElementById('title')
    var mensaje = `El signo del zodiaco de ${nuevaPersona.nombre} es Acuario`
    titulo.innerHTML = mensaje
    var parrafo = document.getElementById('parrafo')
    var mensajeParrafo = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    parrafo.innerHTML = mensajeParrafo
  }else {
    console.log('Esa fecha del calendario no existe');
    alert('Ingrese los valores sin puntos, tildes ni espacios')
  }
}




function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("dia").value = "";
}
