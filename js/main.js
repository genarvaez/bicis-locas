function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name");
	var lastName = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var selected = document.getElementById("select").selectedIndex;

	document.querySelectorAll(".form-signup span").forEach(function(e){
		e.remove();
	})

	//validacion de los campos
	if (name.value == null || name.value.length == 0 
		|| name.value.charAt(0) !== name.value.charAt(0).toUpperCase()){
			var inputNombre = document.getElementsByClassName("input-box")[0];
			var noNombre = document.createElement("span");
			var textoNombre = document.createTextNode("El Nombre no es válido");
			noNombre.appendChild(textoNombre);
			inputNombre.appendChild(noNombre);
		}
	else if(lastname.value == null || lastname.value.length == 0 || !(/^[A-Za-z]*$/).test(lastname.value) 
		|| lastname.value.charAt(0) !== lastname.value.charAt(0).toUpperCase()){
		var inputApellido = document.getElementsByClassName("input-box")[1];
		var noApellido = document.createElement("span");
		var textoApellido = document.createTextNode("El Apellido no es válido");
		noApellido.appendChild(textoApellido);
		inputApellido.appendChild(noApellido);
	}
	else if(!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email.value))){
		var inputEmail = document.getElementsByClassName("input-box")[2];
		var noEmail = document.createElement("span");
		var textoEmail = document.createTextNode("El E-mail no es válido");
		noEmail.appendChild(textoEmail);
		inputEmail.appendChild(noEmail);
	}
	else if(!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/).test(password.value) ||
	 password.value == "password" || password.value == 123456 || password.value == 098754){
		var inputClave = document.getElementsByClassName("input-box")[3];
		var noClave = document.createElement("span");
		var textoClave = document.createTextNode("La constraseña no es válida");
		noClave.appendChild(textoClave);
		inputClave.appendChild(noClave);
	}
	else if(selected == null || selected == 0 ){
		var inputSelect = document.getElementsByClassName("input-box")[4];
		var noSelect = document.createElement("span");
		var textoSelect = document.createTextNode("Debe seleccionar una opción válida");
		noSelect.appendChild(textoSelect);
		inputSelect.appendChild(noSelect);
	}
	else{
	document.getElementById("name").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("input-email").value = "";
	document.getElementById("input-password").value = "";}
	
}
