function ejercicio1() {
	var inicio = document.getElementById("inicio");
	var fin = document.getElementById("fin");
	var cadena="hola";
	for(i=inicio.value; i<fin.value;i++){
		
		cadena+=i;
		alert(i);
	}
	alert(cadena);
}


function ejercicio2(){
	var unidad = document.getElementById("unidad");
	var precio = document.getElementById("precio");
	parseInt(unidad.value);
	parseInt(precio.value);
	var resultado = unidad*precio;
	alert(resultado);
}


function ejercicio3(){
	var numero = document.getElementById("numero");
	if (numero.value=="17"){alert("Número correcto")}
	else{alert("Número incorrecto");}
} 