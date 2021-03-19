const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let assignment=new Schema({
    course:{
        type:String,
    },
    assignment_name:{
        type:String,
    },
    deadline:{
        type:String,
        
    },
},{
        collection:'assignment'
    });

    
module.exports=user=mongoose.model('assignment',assignment);