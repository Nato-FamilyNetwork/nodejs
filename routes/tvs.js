var express = require('express');
var router = express.Router();
var models =require('../model');
var http = require('http');
var fs = require('fs');


router.get('/', function(req, res, next) {
	
/*	
var options = {
  host: 'localhost',
  path: '/ressources/tunisianetTv.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltTunisianetTv.json', "utf-8"));
	
	for(var i=0; i< techPC.length; i++){
		var c = new models.tv({tv:techPC[i].tv, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,marque:techPC[i].marque, source:techPC[i].source});
	c.save();
	}
	
	
var options = {
  host: 'localhost',
  path: '/ressources/mytektv.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltMytekTv.json', "utf-8"));
	
	for(var i=0; i< techPC.length; i++){
		var c = new models.tv({tv:techPC[i].tv, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,marque:techPC[i].marque, source:techPC[i].source});
	c.save();
	}
	
	
	
	*/

	
	
	
	
	
	
	

	
	
models.tv.find({}).exec(function(err,tvs){
    if(err) res.send('Error');
    res.render('tvs.twig', { title: ' List tablette ',tvs:tvs , user:req.user});
    
});
    });


router.post('/', function(req, res, next) {
    if(req.body.search == "")
    {

models.tv.find({"source":req.body.choix}).exec(function(err,tvs){
     if(err) res.send('Error');
    res.render('tvs.twig', { title: 'List des pcs Tunisia net',tvs:tvs, user:req.user });
    
});
        } else
        {
models.tv.find({"tv":{$regex: ".*"+req.body.search+".", $options:"i"}}).exec(function(err,tvs){     if(err) res.send('Error');
    res.render('tvs.twig', { title: 'List tvs',tvs:tvs, user:req.user });
    
});
        }
    });




module.exports = router;