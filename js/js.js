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


  if (((19 < nuevaPersona.dia < 29) && (nuevaPersona.mes == 'Febrero'))||((0 < nuevaPersona.dia < 21) && (nuevaPersona.mes == 'Marzo'))||((0 < nuevaPersona.dia < 21) && (nuevaPersona.mes == 'marzo'))||((19 < nuevaPersona.dia < 29) && (nuevaPersona.mes == 'febrero'))) {
    console.log('Eres Piscis');
  }
  if (((20 < nuevaPersona.dia < 32) && (nuevaPersona.mes == 'Marzo'))||((20 < nuevaPersona.dia < 32) && (nuevaPersona.mes == 'marzo'))||((0 < nuevaPersona.dia < 21) && (nuevaPersona.mes == 'Abril'))||((0 < nuevaPersona.dia < 21) && (nuevaPersona.mes == 'abril'))) {
    console.log('Eres Aries');
  }
}




function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("dia").value = "";
}
