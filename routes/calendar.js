var express = require('express');
var router = express.Router();
var models = require('../model');

/* GET home page. */
router.get('/', function(req, res, next) {
    var coor = models.calendar.find({}).exec(function(err,coor){
                       if(err) res.json({error:err});
                    
/*res.render('poly.twig',{coor:coor , user:req.user}); */ 
     res.json(coor);
           });
});
/*getbyid ok*/
router.get('/:familyId', function(req, res, next) {
    /*models.calendar.find(req.params.familyId, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });*/
    var coor = models.calendar.find({familyFK: req.params.familyId}).exec(function(err,coor){
                       if(err) res.json({error:err});
                    
/*res.render('poly.twig',{coor:coor , user:req.user}); */ 
     res.json(coor);
           });
});
/*update ok*/
router.put('/:id', function(req, res, next) {
    var data = {
        title:req.body.title,
        start:req.body.start,
        end:req.body.end,
        className:req.body.className
    };
    models.calendar.findByIdAndUpdate(req.params.id, {$set: data}, {new: true}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});
router.put('/:id/:title/:start/:end/:className', function(req, res, next) {
    var data = {
        title:req.params.title,
        start:req.params.start,
        end:req.params.end,
        className:req.params.className
    };
    models.calendar.findByIdAndUpdate(req.params.id, {$set: data}, {new: true}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});


router.delete('/:id', function(req, res, next) {
    models.calendar.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.json({error: err});
        }else{
            res.json({done: 1});
        }
    });
});


/*add ok*/
router.post('/addEvent', function(req, res, next) {
  var c = new models.calendar({title:req.body.title,start:req.body.start,end:req.body.end,className:req.body.className,familyFK:req.body.familyFK});
    c.save(function(err,c){
    if(err) req.json({error:err});
        res.json(c);
    });
    
});

module.exports = router;
