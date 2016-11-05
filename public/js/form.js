$(function () {
	$("#send").click(function () {
		datos={
			nombre_a: $("#nombre_a").val(),
			ubicacion: $("#ubicacion").val(),
			direccion_a: $("#direccion_a").val(),
			horario: $("#horario").val(),
			nombre: $("#nombre").val(),
			direccion: $("#direccion").val(),
			telefono: $("#telefono").val(),
			email:    $("#email").val()

		}
		console.log(JSON.stringify(datos));
		$.getJSON('http://10.49.174.244:3000/solicitud_centro', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
			return false;
		});
	$("#send1").click(function () {
		datos={
			nombre_a: $("#nombre_a").val(),
			ubicacion: $("#ubicacion").val(),
			direccion_a: $("#direccion_a").val(),
			horario: $("#horario").val(),
			nombre: $("#nombre").val(),
			direccion: $("#direccion").val(),
			telefono: $("#telefono").val(),
			email:    $("#email").val()

		}
		console.log(JSON.stringify(datos));
		$.getJSON('http://10.49.174.244:3000/solicitud_comedor', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
			return false;
		});
	

});
