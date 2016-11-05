var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/formulario");

var voluntario= new Schema({
  nombre:{type:String,require:true},
  direccion:{type:String, require:true},
  telefono:{type:String, require:true},
  correo:{type:String, require:true},
  tipo:{type:String,require:true}
  });

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
//creacion de las tablas

var solicitud_voluntario=mongoose.model("solicitud_voluntario",voluntario);//solicitudes
//exportaciones de las tablas
module.exports.solicitud_voluntario=solicitud_voluntario;

var solicitud_comedor=mongoose.model("solicitud_comedor",comedor);
module.exports.solicitud_comedor=solicitud_comedor;//exportamos la tabla

var solicitud_centro=mongoose.model("solicitud_centro",centro);
module.exports.solicitud_centro=solicitud_centro;//exportamos la tabla
