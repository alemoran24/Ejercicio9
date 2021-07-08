/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ 
var Ingresesueldo;
var aumento;
var Resultado;
var porc;

Ingresesueldo=document.getElementById('txtIdSueldo').value;
Ingresesueldo=parseInt(Ingresesueldo);

porc=prompt("su porcentaje es: ");
porc=parseInt(porc);


aumento=Ingresesueldo*porc/100;
Resultado=Ingresesueldo+aumento;

document.getElementById('txtIdResultado').value=Resultado;
//Resultado=parseInt(Resultado);





}
