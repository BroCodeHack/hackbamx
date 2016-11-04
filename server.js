var express=require("express");
var app=express();
var server=require("http").Server(app)


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
