/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var primerNumero
 var segundoNumero
 var tercerNumero
 var suma
 
 primerNumero=document.getElementById('txtIdPrecioUno').value;
 primerNumero=parseInt(primerNumero);


 segundoNumero=document.getElementById('txtIdPrecioDos').value;
 segundoNumero=parseInt(segundoNumero);

 tercerNumero=document.getElementById('txtIdPrecioTres').value;
 tercerNumero=parseInt(tercerNumero);

 suma=primerNumero+segundoNumero+tercerNumero;

mensaje= "la suma de los mismos es: "+suma;

alert(mensaje);
}
function Promedio () 
{var primerNumero
 var segundoNumero
 var tercerNumero
 var promedio
 
 primerNumero=document.getElementById('txtIdPrecioUno').value;
 primerNumero=parseInt(primerNumero);


 segundoNumero=document.getElementById('txtIdPrecioDos').value;
 segundoNumero=parseInt(segundoNumero);

 tercerNumero=document.getElementById('txtIdPrecioTres').value;
 tercerNumero=parseInt(tercerNumero);

promedio= (primerNumero+segundoNumero+tercerNumero)/3;

mensaje= "el promedio es: "+promedio;
 
alert(mensaje);
}
function PrecioFinal () 
{var primerNumero
 var segundoNumero
 var tercerNumero
 var PrecioFinal
 var iva

 
 primerNumero=document.getElementById('txtIdPrecioUno').value;
 primerNumero=parseInt(primerNumero);


 segundoNumero=document.getElementById('txtIdPrecioDos').value;
 segundoNumero=parseInt(segundoNumero);

 tercerNumero=document.getElementById('txtIdPrecioTres').value;
 tercerNumero=parseInt(tercerNumero);

 iva=(primerNumero+segundoNumero+tercerNumero)*21/100;
 PrecioFinal=primerNumero+segundoNumero+tercerNumero+iva;
 
 mensaje= "el precio final es: "+PrecioFinal;
 
 alert(mensaje)
}
