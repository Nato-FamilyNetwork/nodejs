var models = require('../model');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    models.todo.find().exec(function(err, todo){
        if(err){
            res.json({error: err});
        }else{
            res.send(todo);
        }
    });
});



router.post('/', function(req, res, next) {
    var p = new models.todo();
    p.titre = req.body.titre;
    p.description = req.body.description;
    p.date = req.body.date;
    p.userFK = req.body.userFK;

    p.status = req.body.status;

    p.save(function(err, todo){
        if(err){
            res.json({error: err});
        }else{
            res.json(todo);
        }
    });
});



router.put('/:id', function(req, res, next) {
    var data = {
     
        status: "2"
     
    };
    models.todo.findByIdAndUpdate(req.params.id, {$set: data}, {new: true}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});




router.put('/done/:id', function(req, res, next) {
    var data = {
     
        status: "3"
     
    };
    models.todo.findByIdAndUpdate(req.params.id, {$set: data}, {new: true}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});






router.delete('/:id', function(req, res, next) {
    models.todo.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.json({error: err});
        }else{
            res.json({done: 1});
        }
    });
});

router.delete('/all/:userFK', function(req, res, next) {
    models.todo.remove({'userFK':{'$in':req.params.userFK}}, function(err){
        
        if(err){
            res.json({error: err});
        }else{
            res.json({done: 1});
        }
    });
});



router.get('/:id', function(req, res, next) {
   
    models.todo.find({"userFK":req.params.id}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});
router.get('/f/:id', function(req, res, next) {
   
    models.todo.find({"_id":req.params.id}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});



router.get('/:id/:status', function(req, res, next) {
   
    models.todo.find({"userFK":req.params.id,"status":req.params.status}, function(err, p){
        if(err){
            res.json({error: err});
        }else{
            res.json(p);
        }
    });
});


module.exports = router;