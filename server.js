var express = require('express');
var http = require('http');
var io = require('socket.io');

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


app.get('/', function(req, res){
  res.render('index');
});

app.get('/form', function(req, res){
  res.render('form1');
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