var express = require('express');
var router = express.Router();
var models =require('../model');
var http = require('http');
var fs = require('fs');


router.get('/', function(req, res, next) {
	

	/*
	
	
	
	
		
var options = {
  host: 'localhost',
  path: '/ressources/tunisianet-Imprimante.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltTunisianetImp.json', "utf-8"));
	
	for(var i=0; i< techPC.length; i++){
		var c = new models.imprimante({imprimante:techPC[i].imprimante, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source});
	c.save();
	}



var options = {
  host: 'localhost',
  path: '/ressources/mytek-Imprimante.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltMytekImp.json', "utf-8"));
	
	for(var i=0; i< techPC.length; i++){
		var c = new models.imprimante({imprimante:techPC[i].imprimante, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source});
	c.save();
	}	
	*/
	
	
	
models.imprimante.find({}).exec(function(err,imprimantes){
    if(err) res.send('Error');
    res.send(imprimantes);
    
});
    });


router.post('/', function(req, res, next) {
    if(req.body.search == "")
    {

models.imprimante.find({"source":req.body.choix}).exec(function(err,imprimantes){
     if(err) res.send('Error');
    res.render('imprimantes.twig', { title: 'List of imprimante',imprimantes:imprimantes, user:req.user });
    
});
        } else
        {
models.imprimante.find({"imprimante":{$regex: ".*"+req.body.search+".", $options:"i"}}).exec(function(err,imprimantes){     if(err) res.send('Error');
    res.render('imprimantes.twig', { title: 'List of imprimante',imprimantes:imprimantes, user:req.user });
    
});
        }
    });

router.put('/update/:id/:ll', function(req, res, next) {
    models.imprimante.findByIdAndUpdate(req.params.id, {$set: {source: req.params.ll}}, {new: true}, function(err, category){
        if(err){
            res.json({error: err});
        }else{
            res.json(category);
        }
    });
});


module.exports = router;