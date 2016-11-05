var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/formulario");

//hola///

var comedor=new Schema({
  ubicacion:{type:String},
  horario:{type:String},
  encargado:{type:String},
  email:{type:String}
  });

  var centro =new Schema({
  id:{type:String},
  nombre:{type:String},
  ubicacion:{type:String},
  horario:{type:String},
  encargado:{type:String}


  });

var solicitud_comedor=mongoose.model("solicitud_comedor",comedor);
module.exports.solicitud_comedor=solicitud_comedor;//exportamos la tabla

var solicitud_centro=mongoose.model("solicitud_centro",centro);
module.exports.solicitud_centro=solicitud_centro;//exportamos la tabla
