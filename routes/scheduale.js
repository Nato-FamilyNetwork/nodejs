var express = require('express');
var router = express.Router();
    var fs = require('fs');
var http = require('http');
var models= require('../model');
var request = require('request');
var cheerio = require('cheerio');
//var models =require('../model');



router.get('/', function(req, res, next) {
    urls="http://tunisie14.tn/media/television-tunisienne/nessma-tv";
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var times=new Array();
       var pgm=new Array();
       var Links=new Array();
       var Dates=new Array();
      
       
       ($('[class="heure"]')).each(function (i, allPc) {
             times.push($(allPc).text());
       
      });
      ($('[class="contenu"]')).each(function (i, allPc) {
             pgm.push($(allPc).text());
       
      });
      
    
      for(var kk=0; kk<times.length;kk++){
          var c = new models.schedual();
		c.program.contenue=(pgm[kk]);
		c.program.heur=(times[kk]);
		
		c.chaine = "nesma";
		
		c.save();
      }
      
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
    
    urls="http://tunisie14.tn/media/television-tunisienne/hannibal-tv";
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var times=new Array();
       var pgm=new Array();
       var Links=new Array();
       var Dates=new Array();
      
       
       ($('[class="heure"]')).each(function (i, allPc) {
             times.push($(allPc).text());
       
      });
      ($('[class="contenu"]')).each(function (i, allPc) {
             pgm.push($(allPc).text());
       
      });
      
    
      for(var kk=0; kk<times.length;kk++){
          var c = new models.schedual();
		c.program.contenue=(pgm[kk]);
		c.program.heur=(times[kk]);
		
		c.chaine = "hannibal";
		
		c.save();
      }
      
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
  
     urls="http://tunisie14.tn/media/television-tunisienne/wataniya-1";
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var times=new Array();
       var pgm=new Array();
       var Links=new Array();
       var Dates=new Array();
      
       
       ($('[class="heure"]')).each(function (i, allPc) {
             times.push($(allPc).text());
       
      });
      ($('[class="contenu"]')).each(function (i, allPc) {
             pgm.push($(allPc).text());
       
      });
      
    
      for(var kk=0; kk<times.length;kk++){
          var c = new models.schedual();
		c.program.contenue=(pgm[kk]);
		c.program.heur=(times[kk]);
		
		c.chaine = "watanya1";
		
		c.save();
      }
      
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});

    urls="http://tunisie14.tn/media/television-tunisienne/wataniya-2";
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var times=new Array();
       var pgm=new Array();
       var Links=new Array();
       var Dates=new Array();
      
       
       ($('[class="heure"]')).each(function (i, allPc) {
             times.push($(allPc).text());
       
      });
      ($('[class="contenu"]')).each(function (i, allPc) {
             pgm.push($(allPc).text());
       
      });
      
    
      for(var kk=0; kk<times.length;kk++){
          var c = new models.schedual();
		c.program.contenue=(pgm[kk]);
		c.program.heur=(times[kk]);
		
		c.chaine = "watanya1";
		
		c.save();
      }
      
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
    
 models.schedual.find({}).exec(function(err,tunisianetpc){
    if(err) res.send('Error');
    res.send(tunisianetpc);
    //res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpc, user:req.user });
    
});
    });


	
	
	
	
	
	

router.post('/:nom', function(req, res, next) {
    
	models.schedual.find({"program.contenue":{$regex: ".*"+req.params.nom+".*",$options:"i"}}).exec(function(err,ts){
		if(err) res.send("Error");
		res.json(ts)
		
		
		
	});
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
module.exports = router;
