const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var registerDetails=new Schema({
        name:{type:String},
        email:{type:String},
        mob:{type:Number}
})
var registerModel=mongoose.model('register',registerDetails)
module.exports=registerModel