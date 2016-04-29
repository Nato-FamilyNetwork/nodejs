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


router.put('/online/:id/', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {online:"true"}, {new: true}}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
        }
    });
});

router.put('/offline/:id/', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {online:"false"}, {new: true}}, function(err, category){
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


io.sockets.on('connection', function (socket) {

router.put('/add/:id/:fid', function(req, res, next) {
    Account.findByIdAndUpdate(req.params.id, {$set: {familyid: req.params.fid}}, {new: true}, function(err, category){
        if(err){
            res.send({error: err});
        }else{
            res.send(category);
             io.emit('notification', {id: req.params.id, text: 'On vous à ajouter à une famille ', date: new Date()});
        }
    });
});

});

router.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.send(200);
});

return router;
};
