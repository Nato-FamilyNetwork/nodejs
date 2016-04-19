var express = require('express');
var router = express.Router();
var models =require('../model');
var pc1 = require('../DataMean/tunisianetPC');
var http = require('http');
var fs = require('fs');

router.get('/', function(req, res, next) {
	 
	//var lyoum = new Date();
	//var nhar = lyoum.getUTCDate();
	//console.log(nhar);
	 
var options = {
  host: 'localhost',
  path: '/ressources/technopro.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltTechPro.json', "utf-8"));
	
	//for(var i=0; i< techPC.length; i++){
		//var c = new models.pc({marque:techPC[i].marque, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source, ram:techPC[i].ram});
//	c.save();
	//}
	 
var options = {
  host: 'localhost',
  path: '/ressources/mytek.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltMytek.json', "utf-8"));
	
	/*for(var i=0; i< techPC.length; i++){
		var c = new models.pc({marque:techPC[i].marque, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source, ram:techPC[i].ram});
	c.save();
	}*/
	
var options = {
  host: 'localhost',
  path: '/ressources/tunisianet.php'
};
    http.request(options).end();
	var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/rsltTNET.json', "utf-8"));
	
	/*for(var i=0; i< techPC.length; i++){
		var c = new models.pc({marque:techPC[i].marque, lien:techPC[i].lien,photo:techPC[i].photo, prix:techPC[i].prix,PC:techPC[i].PC, source:techPC[i].source, ram:techPC[i].ram});
	c.save();
	}
	*/
	 
models.pc.find({}).exec(function(err,tunisianetpc){
    if(err) res.send('Error');
    res.send(tunisianetpc);
    //res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpc, user:req.user });
    
});
    });

//search by ressource
router.get('/:search', function(req, res, next) {

models.pc.find({"source":req.params.search}).exec(function(err,tunisianetpcs){
     if(err) res.send('Error');
     res.json(tunisianetpcs);
});
});


//search by ressource
router.get('/:search2/:marque', function(req, res, next) {

models.pc.find({"marque":{$regex: ".*"+req.params.marque+".*", $options:"i"},"source":req.params.search2}).exec(function(err,ts){
     if(err) res.send('Error');
     res.json(ts);
});
});



router.post('/', function(req, res, next) {
    if(req.body.search == "")
    {

models.pc.find({"source":req.body.choix}).exec(function(err,tunisianetpcs){
     if(err) res.send('Error');
    res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpcs, user:req.user });
    
});
        } else
        {
models.pc.find({"PC":{$regex: ".*"+req.body.search+".", $options:"i"}}).exec(function(err,tunisianetpcs){     if(err) res.send('Error');
    res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpcs, user:req.user });
    
});
        }
    });


module.exports = router;