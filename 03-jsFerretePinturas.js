/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var FahrenheitCentigrados;
	var convertiracentigrados;
	var mensaje;

	FahrenheitCentigrados=document.getElementById('txtIdTemperatura').value;
	FahrenheitCentigrados=parseInt(FahrenheitCentigrados);

	convertiracentigrados=(FahrenheitCentigrados-32)*5/9;
	mensaje=FahrenheitCentigrados+ " Fahrenheit son "+convertiracentigrados+" centigrados";
	alert(mensaje);
}

function CentigradosFahrenheit ()
{var Centigrados;
var convertirAf;
var mensaje;

Centigrados=document.getElementById('txtIdTemperatura').value;
Centigrados=parseInt(Centigrados);

convertirAf=(Centigrados*9/5)+32;

mensaje=Centigrados+ " centigrados son "+convertiracentigrados+ " Fahrenheit";
alert(mensaje);
	
}
