/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ var largo;
  var ancho;
  var perimetroR;
  var alambre;
  var mensaje;

  largo=document.getElementById('txtIdLargo').value;
  largo=parseInt(largo);
  ancho=document.getElementById('txtIdAncho').value;
  ancho=parseInt(ancho);

  perimetroR= (largo*2)+(ancho*2);
  alambre=perimetroR*3;
  mensaje="El alambre necesario es: "+alambre;
  alert(mensaje);

}
function Circulo ()
{var radio;
 var perimetroC;
 var alambre;
 var mensaje;

 radio=document.getElementById('txtIdRadio').value;
 radio=parseInt(radio);

 perimetroC=2*3.14*radio;
 alambre=perimetroC*3;
 mensaje="El alambre necesario es: "+alambre;
 alert(mensaje)	
}
function Materiales () 
{ var ancho
  var largo 
  var areaR
  var cementoR
  var calR
  var mensaje

  largo=document.getElementById('txtIdLargo').value;
  largo=parseInt(largo)
  ancho=document.getElementById('txtIdAncho').value;
  ancho=parseInt(ancho)

  areaR=largo*ancho;
  calR=areaR*3;
  cementoR=areaR*2;
  mensaje= "necesitas "+cementoR+" Bolsas de cemento y "+calR+" Bolsas de cal";
  alert(mensaje)

}