$(function () {
	$("#send").click(function () {
		datos={
			nombre_c: $("#nombre_c").val(),
			ubicacion: $("#ubicacion").val(),
			tipo: $("#tipo").val(),
			latitud: $("#ubicacionlat").val(),
			longitud: $("#ubicacionlng").val(),
			inicio : $("#inic").val(),
			fin : $("#fin").val(),
			nombre: $("#encargado").val(),
			direccion: $("#direccion").val(),
			telefono: $("#telefono").val(),
			email:    $("#email").val()

		}
			$("#nombre_c").val("");
			$("#ubicacion").val("");
			$("#tipo").val("");
			$("#ubicacionlat").val("");
			$("#ubicacionlng").val("");
			$("#inic").val("");
			$("#fin").val("");
			$("#encargado").val("");
			$("#direccion").val("");
			$("#telefono").val("");
			$("#email").val("");

		console.log(JSON.stringify(datos));
		$.getJSON('http://10.49.174.244:3000/solicitud_c', datos, function(data) {
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

			$("#nombre_a").val("");
			$("#ubicacion").val("");
			$("#direccion_a").val("");
			$("#horario").val("");
			$("#nombre").val("");
			$("#direccion").val("");
			$("#telefono").val("");
			$("#email").val("");

		console.log(JSON.stringify(datos));
		$.getJSON('http://10.49.174.244:3000/solicitud_comedor', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
			return false;
		});
	$("#send2").click(function () {
		datos={
			nombre: $("#nombre").val(),
			direccion: $("#direccion").val(),
			telefono: $("#telefono").val(),
			email:    $("#email").val(),
			tipo:    $("#tipo").val()

		}
			$("#nombre").val("");
			$("#direccion").val("");
			$("#telefono").val("");
			$("#email").val("");
			$("#tipo").val("");
			
		console.log(JSON.stringify(datos));
		$.getJSON('http://10.49.174.244:3000/solicitud_voluntario', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
			return false;
		});
	

});
