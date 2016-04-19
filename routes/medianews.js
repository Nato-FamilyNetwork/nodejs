var express = require('express');
var router = express.Router();
var models =require('../model');
var pc1 = require('../DataMean/tunisianetPC');
var http = require('http');
var fs = require('fs');

router.get('/tounsya', function(req, res, next) {
	var options = {
  host: 'localhost',
  path: '/ressources/tounsya.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltTounsya.json', "utf-8"));
	
	//console.log(techPC);
	
	for(var i=0; i< techPC.length; i++){
		var c = new models.newsTounsya({image:techPC[i].image, titre:techPC[i].titre,lien:techPC[i].lien, date:techPC[i].date, source:"Ettounsia"});
	c.save();
	}
	res.json(techPC);
});




router.get('/chourouk', function(req, res, next) {
	
var options = {
host: 'localhost',
path: '/ressources/alchourouk.php'
};
http.request(options).end();
var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltChourouk.json', "utf-8"));
//console.log(techPC);
for(var i=0; i< techPC.length; i++){
var c = new models.newsTounsya({image:techPC[i].image, titre:techPC[i].titre,lien:techPC[i].lien, date:techPC[i].date, source:"Chourouk"});
c.save();
}
	
		
	
	
res.json(techPC);

    
});
    

	
	
	
	
	
	
	
	

	
	
	
	
	
	

module.exports = router;