var express = require('express');
var router = express.Router();
var models =require('../model');
var http = require('http');
var fs = require('fs');


router.get('/', function(req, res, next) {
	
	
	
	
	
	
	
	
			
var options = {
  host: 'localhost',
  path: '/ressources/tunisianet-tablette.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltTunisianetTab.json', "utf-8"));
	/*
	for(var i=0; i< techPC.length; i++){
		var c = new models.tablette({tablette:techPC[i].tablette, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source, marque:techPC[i].marque});
	c.save();
	}*/



var options = {
  host: 'localhost',
  path: '/ressources/mytek-tablette.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltMytekTab.json', "utf-8"));
	/*
	for(var i=0; i< techPC.length; i++){
		var c = new models.tablette({tablette:techPC[i].tablette, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source, marque:techPC[i].marque});
	c.save();
	}*/
	
models.tablette.find({}).exec(function(err,tablettes){
    if(err) res.send('Error');
    res.send(tablettes);
    
});
    });


router.post('/', function(req, res, next) {
    if(req.body.search == "")
    {

models.tablette.find({"source":req.body.choix}).exec(function(err,tablettes){
     if(err) res.send('Error');
    res.render('tablettes.twig', { title: 'List of tablettes',tablettes:tablettes, user:req.user });
    
});
        } else
        {
models.tablette.find({"marque":{$regex: ".*"+req.body.search+".", $options:"i"}}).exec(function(err,tablettes){     if(err) res.send('Error');
    res.render('tablettes.twig', { title: 'List tvs',tablettes:tablettes, user:req.user });
    
});
        }
    });

module.exports = router;