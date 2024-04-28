const mongoose=require('mongoose');

const UserSchema =new mongoose.Schema({
    Mno:String,
    Name:String,
    Dep:String,
    Ms:String,
    Me:String
})

const userModel=mongoose.model('User',UserSchema)

module.exports=userModel
