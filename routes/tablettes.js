var express = require('express');
var router = express.Router();
var models =require('../model');
var http = require('http');

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


router.get('/', function(req, res, next) {
	
	
	  url = "http://www.tunisianet.com.tn/396-tablette-tactile-tunisie";
  //tunisianet portable
    
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      allPcs = $("[id=\"produit_liste_texte\"]").children(),i=0,j=0;
      var links= new Array();
      var imgs= new Array();
      var prices= new Array();
      var titles= new Array();
     
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var allImages=$('[width="150"]');
       var allLinks=$('[class="product_img_link"]');
      
      //recuperation de tout les liens
      allLinks.each(function (i, allLink) {
          links.push($(allLink).attr().href);
          titles.push($(allLink).attr().title);
          
      });
      
      var prix=$('[class="price"]');//tout les prix
      
      //recuperation de tout les prix
      prix.each(function (i, pr) {
          prices.push($(pr).text());
          
      });
      allImages.each(function (i, allImage) {
          imgs.push($(allImage).attr().src);
          
      });
      
      
      for(var ff=0;ff<prices.length;ff++){
         var c = new models.tablette({
         	tablette:titles[ff], 
         	lien:links[ff],
          	photo:imgs[ff],
         	prix:prices[ff], 
         	source:"tunisianet"
         	
         });
	c.save();
 
      }
     
       models.tablette.find({}).exec(function(err,tablettes){
    if(err) res.send('Error');
    res.send(tablettes);
    
});
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
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
