const express=require('express');
const assingmentRoutes=express.Router();
let assignment=require('../models/assignment');


assingmentRoutes.route('/add').post(function(req,res){
    let assignment=new assingment(req.body);
    assignment.save()
    .then(assignment=>{
        res.setMaxListeners(200).json({'assignment':'assignment add successfully'});
    })
    .catch(err=>{
        res.status(400).send("Unable to save")
    })
})
assingmentRoutes.route('/').get(function(req,res){
    assignment.find(function(err,assignment){
        if(err){
            console.log(ree);
        }else{
            res.json(assignment);
        }
    });
});

assingmentRoutes.route('/delete/:id').get(function(req,res){
    assignment.findByIdAndRemove({_id:req.params.id},function(err,assignment){
        if(err) res.json(err);
        else res.json('Successfully removed');
    })
});
module.exports=assingmentRoutes;