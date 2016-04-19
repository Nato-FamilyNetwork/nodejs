var express = require('express');
var router = express.Router();
    var fs = require('fs');
var http = require('http');
var models= require('../model');

//var models =require('../model');



router.get('/', function(req, res, next) {
    var http = require('http');
var options = {
  host: 'localhost',
  path: '/ressources/tvSched.php'
};
    http.request(options).end();

var schedual = JSON.parse(fs.readFileSync('/wamp/www/ressources/schedual.json', "utf-8"));


for(var i=0; i< schedual.length; i++){
		
		for(var j=0; j<schedual[i].program.length; j++){
		var c = new models.schedual();
		c.program.push(schedual[i].program[j]);
		
		c.chaine = schedual[i].chaine.nom;
		
		c.save();
		
		}
	
	}


  
    var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
}
setTimeout(function(){alert("It's 10am!")}, millisTill10);
    // res.render('scheduale.twig', { title: 'Tv Channels Schedual  ',schedual:schedual });
	 res.send(schedual);
    });


	
	
	
	
	
	

router.post('/:nom', function(req, res, next) {
    
	models.schedual.find({"program.contenue":{$regex: ".*"+req.params.nom+".*",$options:"i"}}).exec(function(err,ts){
		if(err) res.send("Error");
		res.json(ts)
		
		
		
	});
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
module.exports = router;