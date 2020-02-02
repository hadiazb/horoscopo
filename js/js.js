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
  document.getElementById("botonHorozcopo").addEventListener( "click", imprimir, false);
}

function nuevaPersona(){
  var introNombre = document.getElementById("nombre").value;
  var introMes   = document.getElementById("mes").value;
  var introDia   = parseInt(document.getElementById("dia").value);
  var nuevaPersona = { "nombre": introNombre, "mes": introMes, "dia":  introDia };
  usuario.push(nuevaPersona);
}
console.log(usuario);
function horoscopo(usuario){
  switch (usuario) {
    case ((19 < usuario[1].dia < 29) && (usuario[1].mes == 'Febrero'))||((0 < usuario[1].dia < 21) && (usuario[1].mes == 'Marzo')):
    case ((19 < usuario[1].dia < 29) && (usuario[1].mes == 'febrero'))||((0 < usuario[1].dia < 21) && (usuario[1].mes == 'marzo')):
      console.log('jhgh  jgf hg f');
      break;
    default:
  }
}
function imprimir(){
  horoscopo(usuario)
}
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("dia").value = "";
}
