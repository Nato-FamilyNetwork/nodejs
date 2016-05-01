var express = require('express');
var router = express.Router();
var models = require('../model');


router.get('/afficher/:id', function(req, res, next) {
 var coor = models.comment.find({"family":req.params.id}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});
router.get('/affiche/:family', function(req, res, next) {
 var coor = models.comment.find({"userFK":req.params.family}, function(err, p){
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
 
  var c = new models.comment({attitude:req.body.mylat,longitude:req.body.mylong,date:req.body.date,name:req.body.name,family:req.body.family,userFK:req.body.userFK});
    c.save(function(err,c){
    if(err) req.json({error:err});
        res.json(c);
    });
    
});
router.get('/need/:familyId', function(req, res, next) {
    /*models.calendar.find(req.params.familyId, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });*/
    var coor = models.comment.find({family: req.params.familyId}).exec(function(err,coor){
                       if(err) res.json({error:err});
                    
/*res.render('poly.twig',{coor:coor , user:req.user}); */ 
     res.json(coor);
           });
});

module.exports = router;
