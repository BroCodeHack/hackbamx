var mongoose=require("mongoose");
var Schema=mongoose.Schema;



var comedor=new Schema({

id:{type:String}
ubicacion{type:String, require:true}
horario:{type:String,require:true}
encargado:{type:String,require:true}
email:{type:String,require:true}



}); module.exports=comedor;
