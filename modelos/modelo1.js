var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var voluntario= new Schema({

nombre:{type:String,require:true}
direccion:{type:String, require:true}
telefono:{type:String, require:true}
correo:{type:String, require:true}
tipo:{type:String,require:true}
});
module.exports=voluntario;

var comedor=new Schema({

id:{type:String}
ubicacion{type:String, require:true}
horario:{type:String,require:true}
encargado:{type:String,require:true}
email:{type:String,require:true}



}); module.exports=comedor;

var centro =new Schema({
id:{type:String}
nombre:{type:String}
ubicacion:{type:String}
horario:{type:String}
encargado:{type:String}


}); module.exports=centro;
