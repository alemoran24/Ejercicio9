/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var ingresesueldo;
var descuento;
var resultado;


ingresesueldo=document.getElementById('txtIdImporte').value;
ingresesueldo=parseInt(ingresesueldo);


descuento=ingresesueldo*25/100;
resultado=ingresesueldo-descuento;

document.getElementById('txtIdResultado').value=resultado;


}
