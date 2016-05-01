var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var models =require('../model');
var fs=require('fs');
  
/* GET home page. */
router.get('/:familyId', function(req, res, next) {
     
    
     
    models.food.find({"family":req.params.familyId}).exec(function(err,team){
    if(err) res.send('Error');
    res.send(team);
    //res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpc, user:req.user });
    
});
  
    
    
      
    
  
});

router.post('/', function(req, res, next) {
    var f = new models.food();
    f.title = req.body.title; 
    f.mx=req.body.mx; 
    f.family=req.body.family;
    f.contenue = req.body.contenue;
   
    //f.message.push(req.body.message[0]);
    

    //f.status = req.body.status;

    f.save(function(err, todo){
        if(err){
            res.json({error: err});
        }else{
            res.json(todo);
        }
    });
});
router.put('/:id/:msg/:z', function(req, res, next) {
     var me = new Date();
     var h =date.getHours()+1+"h";
     var m =date.getMinutes()+"min";
     
    var hh= {"nom":req.params.msg,"users":req.params.z,"dates":h+":"+m};
     
    
    models.food.find({"title":{$regex: ".*"+req.params.id+".*", $options:"i"}}).exec(function(err,ts){
     if(err) res.send('Error');
    var idddddd=(ts[0]._id);
         models.food.findById(idddddd, function(err, p){
        if(err){
            res.json({error: err});
        }else{
             
            p.message.push(hh);
            p.save();
            res.json(p);
            
        }
    });
});
            
     
});

router.put('/update/:id/:id2/:note', function(req, res, next) {
   var hh=req.params.id2;
    //models.food.findByIdAndUpdate(req.params.id, {$set: {"message.0":{vote: req.params.note}}}, function(err, food){
    models.food.find({"_id":req.params.id}).exec(function(err,food){  
        if(err){
            res.send({error: err});
        }else{
          for (var i = 0; i < food[0].message.length; i++)
          {
            // look for the entry with a matching `code` value
            if (food[0].message[i]._id == req.params.id2){
              food[0].message[i].vote=(parseInt(food[0].message[i].vote)) ?  parseInt(food[0].message[i].vote)+1:1;
             
              //food.save();
              res.send(food);
            }
          }
          food[0].save();
            res.send(food[0].message.length);
        }
    });
});
  

module.exports = router;
