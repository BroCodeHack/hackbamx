var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/formulario");

var voluntario= new Schema({
  nombre:{type:String,require:true},
  direccion:{type:String, require:true},
  telefono:{type:String, require:true},
  email:{type:String, require:true},
  tipo:{type:String,require:true},
  estado:Boolean
});

  // var comedor=new Schema({
  //   ubicacion:{type:String},
  //   horario:{type:String},
  //   encargado:{type:String},
  //   email:{type:String},
  //   estado:Boolean
  //   });

    var centro =new Schema({
    nombre_c:{type:String,require:true},//nombre del centro
    tipo:{type:String},//comedor/centro
    latitud:{type:String},
    longitud:{type:String},
    inicio:{type:String},
    fin:{type:String},

    nombre:{type:String},
    direccion:{type:String},
    telefono:{type:String},
    email:{type:String},
    estado:Boolean
    });
//creacion de las tablas

var solicitud_voluntario=mongoose.model("solicitud_voluntario",voluntario);//solicitudes
//exportaciones de las tablas
module.exports.solicitud_voluntario=solicitud_voluntario;

var solicitud_centro=mongoose.model("solicitud_centro",centro);
module.exports.solicitud_centro=solicitud_centro;//exportamos la tabla

// var solicitud_centro=mongoose.model("solicitud_centro",centro);
// module.exports.solicitud_centro=solicitud_centro;//exportamos la tabla
