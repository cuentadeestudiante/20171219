function comprobar(){
	var primo = window.prompt("Dime número primo del 1 al 10");
	if (primo == 1||primo ==2||primo==3||primo==5||primo==7){
		window.alert("Lo has conseguido");
	}
}

function viajar(){
	var viaje = window.prompt('Dónde quiere viajar?');
	switch (viaje) {
	  case "Roma":
		  alert("500€");
		  break;
	  case "París":
		  alert("450€");
		  break;
	  case "Paris":
		  alert("450€");
		  break;
	  case "Berlín":
		  alert("380€");
		  break;
	  case "Berlin":
		  alert("380€");
		  break;
	  default:
		  alert("Pida presupuesto");
	  	  break;	  
	}
}