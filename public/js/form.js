$(function () {
	var socket = io.connect('http://localhost:3000',{'forceNew':true});

	socket.on('messages',function (data) {
	console.log(data.length);
	$("#SoliciC").html("");
		for (var a = 0; a <= data.length-1;a++ ) {
			if (data[a].tipo == "1") {
				$("#SoliciC").append(`
				<div class="panel panel-primary">
				  <div class="panel-body">
				    <Strong>Solicitud de centro de acopio: ${data[a].nombre_c}</Strong> 
				  </div>
				  <div class="panel-footer">
				  Coordenadas <br>
				  latitud: ${data[a].latitud}, longitud: ${data[a].longitud} <br>
				  Horario de Atención<br>
				  inicio: ${data[a].inicio}  fin: ${data[a].fin}<br>
				  Datos del responsable<br>
				  nombre: ${data[a].nombre}<br>
				  direccion: ${data[a].direccion}<br>
				  telefono: ${data[a].telefono}<br>
				  email: ${data[a].email}
				  </div>
				</div>
				`);
			}else{
				$("#SoliciC").append(`
				<div class="panel panel-primary">
				  <div class="panel-body">
				    <Strong>Solicitud de comedor: ${data[a].nombre_c}</Strong> 
				  </div>
				  <div class="panel-footer">
				  Coordenadas <br>
				  latitud: ${data[a].latitud}, longitud: ${data[a].longitud} <br>
				  Horario de Atención<br>
				  inicio: ${data[a].inicio}  fin: ${data[a].fin}<br>
				  Datos del responsable<br>
				  nombre: ${data[a].nombre}<br>
				  direccion: ${data[a].direccion}<br>
				  telefono: ${data[a].telefono}<br>
				  email: ${data[a].email}
				  </div>
				</div>
				`);
			}
			


		
		}
	});

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
		$.getJSON('http://localhost:3000/solicitud_c', datos, function(data) {
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
		$.getJSON('http://localhost:3000/solicitud_comedor', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
		var payload = {
			id : 1
		}
		socket.emit('newcomedor',payload);
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
		$.getJSON('http://localhost:3000/solicitud_voluntario', datos, function(data) {
        	console.log(JSON.stringify(data));
        	alert("se enviaron correctamente");
      		});
			return false;
		});
	

});
