var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/formulario");

var centro =new Schema({
id:{type:String}
nombre:{type:String}
ubicacion:{type:String}
horario:{type:String}
encargado:{type:String}


});

var solicitud_centro=mongoose.model("solicitud_centro",centro);
module.exports.solicitud_centro=solicitud_centro;//exportamos la tabla
