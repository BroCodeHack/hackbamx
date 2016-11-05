var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/formulario");

//hola///

var comedor=new Schema({

id:{type:String}
ubicacion{type:String, require:true}
horario:{type:String,require:true}
encargado:{type:String,require:true}
email:{type:String,require:true}



});

var solicitud_comedor=mongoose.model("solicitud_comedor",comedor);
module.exports.solicitud_comedor=solicitud_comedor;//exportamos la tabla
