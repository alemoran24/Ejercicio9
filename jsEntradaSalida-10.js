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
var porcentajededescuento;

ingresesueldo=document.getElementById('txtIdImporte').value;
ingresesueldo=parseInt(ingresesueldo);

porcentajededescuento=prompt("su porcentaje es: ");
porcentajededescuento=parseInt(porcentajededescuento);


descuento=ingresesueldo*porcentajededescuento/100;
resultado=ingresesueldo-descuento;

document.getElementById('txtIdResultado').value=resultado;


}
