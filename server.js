var express=require("express");//crear servidor express
var app=express();//eje   cutar el servidor express
var server=require("http").Server(app);//crear servidor con http y pasarle la aplicacion express
var io=require("socket.io")(server);//servidor de sockets

//******tablas*****
//checar el nombre de la tabla y la ubicacion
var solicitudvoluntario=require("./modelos/modelo1").solicitud_voluntario;
var solicitud_c=require("./modelos/modelo1").solicitud_centro;

app.set('view engine', 'ejs');
app.use("/estatico",express.static('public'));
var solcentro = [{}];


io.on("connection",function(socket){  
  solicitud_c.find(function (err,doc) {
    solcentro =doc;
  });
  //console.log("Alguien se ha conectado con sockets");
  socket.emit("messages",solcentro);

  socket.on("newcomedor", function(data){
    //console.log("Nuevo comedor");
    solicitud_c.find(function (err,doc) {
      solcentro =doc;
    });
    io.sockets.emit("messages",solcentro);//se utiliza todo el servidor para envarle a todos los sockets el array actualizado
   });
});



app.get("/solicitud_c",function(req,res)
{
  var sol_c=new solicitud_c({
    nombre_c:req.query.nombre_c,//nombre del comedor
    tipo:req.query.tipo,//centro=1/comedor=2
    latitud:req.query.latitud,//coordenadas
    longitud:req.query.longitud,
    inicio:req.query.inicio,//abre
    fin:req.query.fin,//cierra
    ///////////////////
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.query.telefono,
    email:req.query.email,//no requerido
    estado:false
  });
  sol_c.save().then(function(us){
  //console.log("guardamos tus datos");
  },function(err){
    if(err){
      //console.log(String(err));
      //console.log("No se pudieron guardar tus datos");
    }
  });

  solicitud_c.find(function (err,doc) {
      // busca en el modelo
		var cadena= JSON.stringify(doc)﻿;
		var text="";
		for (var a =0; a<cadena.length;a++){

			if (cadena[a]=="\""){
				text+="\"\t";
			}else if(cadena[a]==","){
				text+=",\n";
			}else if (cadena[a]=="}"){
				text+="}\n";
			}else{
				text+=cadena[a];
			}
		}
    //console.log(text);
	});
  var status=true;
 res.header("Access-Control-Allow-Origin","*");
 res.send({"ss":status});
});

app.get("/solicitud_centro",function(req,res){
  var sol_centro=new solicitud_centro({
    nombre_a:req.query.nombre_a,//nombre del comedor
    ubicacion:req.query.ubicacion,//coordenadas
    horario:req.query.horario,
    direccion_a:req.query.direccion_a,
    ///////////////////
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.query.telefono,
    email:req.query.email,
    estado:false
  });

  //console.log(JSON.stringify(req.query));
  var status=true;
  res.header("Access-Control-Allow-Origin","*");
  res.send({"status":status});

  sol_centro.save().then(function(us)//guardamos en la base de datos
  {
    //console.log("Los datos se han guardado correctamente");
  },function(err){
      if(err){
        //console.log(String(err));
        //console.log("Error al guardar los datos");
      }
    });
});

app.get("/solicitud_voluntario",function(req,res){
	var sol_voluntari={
    email:req.query.email,
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.query.telefono,
    tipo:req.query.tipo
  }

  var sol_voluntario= new solicitudvoluntario({
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.query.telefono,
    email:req.query.email,
    tipo:req.query.tipo,
    estado:false
  });

  sol_voluntario.save().then(function(us){
    //console.log("Los datos se han guardado correctamente");
  },function(err){
      if(err){
        //console.log(String(err));
        //console.log("Error al guardar los datos");
      }
    });



  solicitudvoluntario.find(function (err,doc) {
      // busca en el modelo
		var cadena= JSON.stringify(doc)﻿;
		var text="";
		for (var a =0; a<cadena.length;a++){

			if (cadena[a]=="\""){
				text+="\"\t";
			}else if(cadena[a]==","){
				text+=",\n";
			}else if (cadena[a]=="}"){
				text+="}\n";
			}else{
				text+=cadena[a];
			}
		}
		//console.log(text);

	});

  var status=true;
  res.header("Access-Control-Allow-Origin","*");
  res.send({"status":status});

});


app.get('/', function(req, res){
  res.render('index');
});

app.get('/form', function(req, res){
  res.render('form1');
});

app.get('/form2', function(req, res){
  res.render('comedores');
});
app.get('/123456', function(req, res){
  res.render('admin');
});

app.get('/map', function(req, res){
  res.render('mapa1');
});

app.get("/rutas",function(req,res){
  var ruta ={
    inicio:{nombre_c:"cuautla",latitud:"12.927371",longitud:"12.1827",tipo:"1",},
    fin:{nombre_c:"amayuca",latitud:"12.927371",longitud:"12.1827",tipo:"2"}
  }


  //////////////////////
  //hacer la consulta de todas las rutas
  solicitud_c.find({"estado":false},{"nombre_c":1,"tipo":1,"latitud":1,"longitud":1},function(err,doc){
    res.header("Access-Control-Allow-Origin","*");
    res.send(doc);
  });
});

app.get("/admin_solicitudes_centros",function(req,res){
  solicitud_c.find({"estado":false,"tipo":"1"},{"nombre_c":1,"tipo":1,"latitud":1,"longitud":1},function(err,doc){
    res.header("Access-Control-Allow-Origin","*");
    res.send(doc);
  });
});

app.get("/admin_solicitudes_comedores",function(req,res){
  solicitud_c.find({"estado":false,"tipo":"2"},{"nombre_c":1,"tipo":1,"latitud":1,"longitud":1},function(err,doc){
    res.header("Access-Control-Allow-Origin","*");
    res.send(doc);
  });
});

app.get("/respuestas",function(){
    solicitud_c.remove({},{});
});





server.listen(3000,function()
{
    console.log("Servidor con sockets corriendo en puerto 3000");
});
