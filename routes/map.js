var express = require('express');
var router = express.Router();
var models = require('../model');


router.get('/afficher', function(req, res, next) {
 var coor = models.comment.find({}).exec(function(err,coor){
                       if(err) res.json({error:err});
                    
/*res.render('poly.twig',{coor:coor , user:req.user}); */ 
     res.send(coor);
           });
});
router.get('/affichermap', function(req, res, next) {
 var hi= 'hello';
                    
res.render('map.twig',{hi:hi, user:req.user});  
           });

router.post('/addmap', function(req, res, next) {
 
  var c = new models.comment({attitude:req.body.mylat,longitude:req.body.mylong,date:req.body.date});
    c.save(function(err,c){
    if(err) req.json({error:err});
        res.json(c);
    });
    
});

module.exports = router;
