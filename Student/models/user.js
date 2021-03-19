const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const { Mongoose } = require("mongoose");

const userSchema=new Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    Email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=user=mongoose.model('users',userSchema);