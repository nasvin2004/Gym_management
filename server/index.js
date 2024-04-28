const express = require('express');
const mongoose= require('mongoose');
const cors=require('cors')
const userModel=require('./Models/user')

const app=express();
app.use(cors());
app.use(express.json())

async function connect(){
    await mongoose.connect("mongodb+srv://nasvin22:SilverBeach@recipes.zarppgi.mongodb.net/Gym?retryWrites=true&w=majority&appName=recipes");
    console.log("Hello")
}
connect()

app.post('/create',(req,res)=>{
    userModel.create(req.body)
    .then(User=>res.json(User))
    .catch(err=> res.json(err))
})


app.get('/',(req,res)=>{
    userModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
  const id=req.params.id;
  userModel.findById({_id:id})
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
})  

app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    userModel.findByIdAndUpdate({_id:id},{
        Mno:req.body.Mno,
        Name:req.body.Name,
        Dep:req.body.Dep,
        Ms:req.body.Ms,
        Me:req.body.Me})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})  

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


app.listen(8000,()=>{
    console.log("Server Running")
})