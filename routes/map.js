var express = require('express');
var router = express.Router();
var models = require('../model');


router.get('/afficher/:id', function(req, res, next) {
 var coor = models.comment.find({"userFK":req.params.id}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});
router.get('/affichermap', function(req, res, next) {
 var hi= 'hello';
                    
res.render('map.twig',{hi:hi, user:req.user});  
           });

router.post('/addmap', function(req, res, next) {
 
  var c = new models.comment({attitude:req.body.mylat,longitude:req.body.mylong,date:req.body.date,userFK:req.body.userFK});
    c.save(function(err,c){
    if(err) req.json({error:err});
        res.json(c);
    });
    
});

module.exports = router;
