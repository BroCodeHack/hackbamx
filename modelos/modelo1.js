var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/formulario");

var voluntario= new Schema({
  nombre:{type:String,require:true}
  direccion:{type:String, require:true}
  telefono:{type:String, require:true}
  correo:{type:String, require:true}
  tipo:{type:String,require:true}
  });

//creacion de las tablas

var solicitud_voluntario=mongoose.model("solicitud_voluntario",voluntario);//solicitudes
//exportaciones de las tablas
module.exports.solicitud_voluntario=solicitud_voluntario;
