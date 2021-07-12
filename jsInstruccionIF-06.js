function mostrar()
{
		var edad

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);


	
         if(edad>17)
	{
	
		alert("es mayor");

    }

    if(edad<17 && edad>12)
    {
    	alert("es adolescente");
    }

    if (edad<13) 
    {
    	alert("es un niño");
    }



}//FIN DE LA FUNCIÓN