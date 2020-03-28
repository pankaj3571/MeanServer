const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var registerDetails=new Schema({
        name:{type:String},
        email:{type:String},
        mob:{type:Number},
        password:{type:String}
})
var registerModel=mongoose.model('registerdata',registerDetails)
module.exports=registerModel