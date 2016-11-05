var express = require('express');
var http = require('http');
var io = require('socket.io');
var bodyParser=require("body-parser");
//******tablas*****
//checar el nombre de la tabla y la ubicacion
// var solicitudvoluntario=require("./models/solicitudvoluntario").solicitudvoluntario;
// var solicitudcentro=require("./models/solicitudcentro").solicitudcentro;
// var solicitudcomedor=require("./models/solicitudcomedor").solicitudcomedor;
//*******************+
var app = express();
var server = http.createServer(app);
io = io.listen(server);
var connections = 0;

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use("/estatico",express.static('public'));

var messages = [{
	id:1,
	text:"Hola soy un mensaaje",
	author: "Soy daniel"
}]

io.on('connection',function (socket) {
	console.log("se conectaron con sockets");
	socket.emit('messages',messages);
	socket.on('newmessage', function (data) {
		messages.push(data);
		io.sockets.emit('messages',messages);
	});
});



app.get("/solicitud_comedor",function(req,res)
{
  var sol_comedor= //new solicitud_comedor(
  {
    nombre_c:req.query.nombre_c,//nombre del comedor
    ubicacion:req.query.ubicacion,//coordenadas
    horario:req.query.horario,
    direccion:req.query.direccion_c,
    ///////////////////
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.query.telefono,
    email:req.query.email
  }

  console.log(JSON.stringify(req.query.nombre_c));
  // sol_comedor.save().then(function(us)//guardamos en la base de datos
  // {
  //   console.log("Los datos se han guardado correctamente");
  // },function(err)
  //   {
  //     if(err)
  //     {
  //       console.log(String(err));
  //       console.log("Error al guardar los datos");
  //     }
  //   }
});

app.get("/solicitud_centro",function(req,res)
{
  var sol_centro= //new solicitud_centro(
  {
    nombre_a:req.query.nombre_a,//nombre del comedor
    ubicacion:req.query.ubicacion,//coordenadas
    horario:req.query.horario,
    direccion_a:req.query.direccion_a,
    ///////////////////
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.query.telefono,
    email:req.query.email
  }

  console.log(JSON.stringify(req.query));
  var status=true;
  res.header("Access-Control-Allow-Origin","*");
  res.send({"status":status});

  // sol_centro.save().then(function(us)//guardamos en la base de datos
  // {
  //   console.log("Los datos se han guardado correctamente");
  // },function(err)
  //   {
  //     if(err)
  //     {
  //       console.log(String(err));
  //       console.log("Error al guardar los datos");
  //     }
  //   }
});

app.get("/solicitud_voluntario",function(req,res)
{
  var sol_voluntario= new solicitud_voluntario(
  {
    email:req.query.email,
    nombre:req.query.nombre,
    direccion:req.query.direccion,
    telefono:req.telefono.telefono
  });
  console.log(req.query.nombre);
  // sol_voluntario.save().then(function(us)//guardamos en la base de datos
  // {
  //   console.log("Los datos se han guardado correctamente");
  // },function(err)
  //   {
  //     if(err)
  //     {
  //       console.log(String(err));
  //       console.log("Error al guardar los datos");
  //     }
  //   }
});


app.get('/', function(req, res){
  res.render('index', { title: 'Morealert' });
});

io.set('log level', 1);

io.sockets.on('connection', function (socket) {
	connections++;
  	console.log('connected',connections);

  	socket.emit('server', {connections:connections});

  	socket.on('disconnect', function() {
  		connections--;
    	console.log('Se desconecto',connections);
  	});

});


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
