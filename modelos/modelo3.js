var mongoose=require("mongoose");
var Schema=mongoose.Schema;




var centro =new Schema({
id:{type:String}
nombre:{type:String}
ubicacion:{type:String}
horario:{type:String}
encargado:{type:String}


}); module.exports=centro;
