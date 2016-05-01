var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var models =require('../model');
var fs=require('fs');
  
/* GET home page. */
router.get('/', function(req, res, next) {
     
    
     
    models.food.find({}).exec(function(err,team){
    if(err) res.send('Error');
    res.send(team);
    //res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpc, user:req.user });
    
});
  
    
    
      
    
  
});

router.post('/', function(req, res, next) {
    var f = new models.food();
    f.title = req.body.title;
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
router.put('/:id/:msg', function(req, res, next) {
    var hh= {"nom":req.params.msg};
     
    
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

router.put('/update/:id/:note', function(req, res, next) {
   
    models.food.update({_id:req.params.id}, {$set: {"message.1":{vote: req.params.note}}}, {new: true}, function(err, food){
        if(err){
            res.send({error: err});
        }else{
            res.send(food);
        }
    });
});
  

module.exports = router;
