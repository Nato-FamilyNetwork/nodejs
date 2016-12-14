module.exports = function(io) {
var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../model/user');
var model = require('../model/');


 router.get('/', function(req, res) {
    res.render("login.twig" , { user : req.user, message : req.flash('error')});
});

router.post('/', passport.authenticate('local', { failureRedirect: '/register', failureFlash: true }), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(req.user);
		//res.redirect('http://127.0.0.1:2455/app/index.html#/');
    });
});



//bassem
router.put('/update/:id/:league/:team', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {football:{league: req.params.league,team:req.params.team}}}, {new: true}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
        }
    });
});
//radio
router.put('/mlk/mlk/mlk/radio/:id/:radio', function(req, res, next) {	                                     
    Account.findByIdAndUpdate(req.params.id, {$addToSet: { radio : { $each:[req.params.radio]}}}, {new: true}, function(err, category){
        if(err){
             res.send({error: err});
        }else{
            res.send(category);
        }
    });
});



//mahdi
router.get('/all', function(req, res) {
    
    model.user.find({"familyid":null}).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});


router.get('/all/online', function(req, res) {
    
    model.user.find({"online":"true"}).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});

router.get('/family/online/:param', function(req, res) {
    
    model.user.find({"online":"true","familyid":req.params.param}).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});



router.put('/online/:id/', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {online:"true"}}, {new: true}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
        }
    });
});

router.put('/offline/:id/', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {online:"false"}}, {new: true}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
        }
    });
});



router.delete('/bye/:id', function(req, res, next) {
    Account.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.json({error: err});
        }else{
            res.json({done: 1});
        }
    });
});


//mouch mahdi

router.get('/searchme/:param', function(req, res) {
    
    model.user.find({"username":req.params.param}).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});

//mahdi
router.get('/my/:param', function(req, res) {
    
    model.user.find({"familyid":req.params.param}).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});


router.get('/testing', function(req, res) {
    
    model.user.find().limit(-1).skip(parseInt(Math.random()*10)).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});

/*
io.sockets.on('connection', function (socket) {

router.put('/add/:id/:fid/:role', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {familyid: req.params.fid , role: req.params.role}}, {new: true}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
             io.emit('notification', {id: req.params.id, text: 'vous venez d\'être ajouté à une famille', date: new Date()});
        }
    });
});



});*/



router.put('/remove/:id/', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {familyid: "" , role: ""}}, {new: true}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
        }
    });
});

router.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.send(200);
});

return router;

};
