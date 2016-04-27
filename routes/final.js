var FB = require('fb');
var express = require('express');
var router = express.Router();
var models = require('../model');
var Twitter = require('twitter');
var facebook = require('./facebook.js');
var http = require('http');
var fs = require('fs');
 
 
 
 
 router.get('/', function(req, res, next) {
	 
	 var techPC = JSON.parse(fs.readFileSync('/wamp/www/ressources/hygiene.json', "utf-8"));
	 
	 for(var i=0; i< techPC.length; i++){
		var c = new models.hygiene({titre:techPC[i].titre, photo:techPC[i].photo,prix:techPC[i].prix, source:techPC[i].source});
	c.save();
	}
	 
models.hygiene.find({}).exec(function(err,magasins){
    if(err) res.send('Error');
    res.render('final.twig', { title: 'Magasins',magasins:magasins, user:req.user });
    
});
    
});
    
	
	
	
	
	
	/*
	
	 router.post('/', function(req, res, next) {
	 FB.setAccessToken('CAACEdEose0cBAN3qIGlvBdTjDDz5A8ZCXl9eNKZBWzUwfW1I2AIqUp2oZCmatik3KcUbHizG937eR5vjhaZBX6BAWuukWXlSSAtxSR00Pppd9Udk30kPdsRMWHMAm6C4DFyPh4OcIjnks74QzZBGUdq9EZCNyOMYODD2kuKySnJCbGBCRiW51nuM8ZCjIk79ZAUoKkPigB4HZCQHSYbMx0hgkkXDlO7m090wZD');
	 var body = req.body.msg;
FB.api('me/feed', 'post', { message: body }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});
	 

    res.render('final.twig', { title: 'ok '});
    
});
*/





	router.get('/twitts', function(req, res, next) {
	var client = new Twitter({
  consumer_key: 'ndFOIjCSmrjGGvkMbLmOZhV2v',
  consumer_secret: 'IMwzsUao8h4ZQ17AiiggOJQwt7MRzgtttTmSUSKGVwubExc8F2',
  access_token_key: req.user.twitter.token,
  access_token_secret: req.user.twitter.tokenSecret
});
 
 
 
 
var params = {screen_name: req.user.twitter.username};
//client.get('statuses/home_timeline', params, function(error, tweets, response){   
client.get('statuses/home_timeline', params, function(error, tweets, response){   


	for (var j = 0; j< tweets.length; j++){
		   var q = new models.tweets({username: tweets[j].user.name, text: tweets[j].text});
    q.save();
	};
	   
	   
	  // res.render('twitts.twig', { title: tweets , fbs: fbs, user:req.user}); 
	  res.json(tweets);
	  //res.json(tweets);
  
});

	   }); 

	
	
	
	
	
	
	
      

	  
	  
	  
	  
	  
	  
router.get('/fbs', function(req, res, next) {  
FB.setAccessToken('CAACEdEose0cBACjvdaZBET4BDuZAjUtWYw3j6ZBkH1dMumrIUOBbRnrwqZCE2h0pGlJLPTIO0f9amSzz5XIl90nnW0XCTMoYlgYLywWwIRZBVgMDWkGhnzD6oF4RoLgl78SP8yAZCFi13E4QCcDEUQTiKx4mnaQccKGyQQ7WqZAlQ5kpq1bGsapQ2Xf5Iu3jAoQYJpGJwAm9AEFVIJEZCGxfZC1EVx5eJI8wZD');
FB.api(
  '/mosaiquefm/feed',
  'GET',
  {},
  function(response) 
  {
      
	   var fbs = response;
	   
	//   console.log(fbs);
	   
	   for (var i = 0; i< fbs.data.length; i++){
		   var c = new models.fbs({message: fbs.data[i].message, created_time: fbs.data[i].created_time, link:fbs.data[i].link});
    c.save();
	};
	
	   
	   
	 
	  res.json(fbs);
	  
  }
);
	  });
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  
	/*
router.post('/', function(req, res, next) {
var body = req.body.msg;
FB.api('me/feed', 'post', { message: body }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});
res.render('final.twig', { title: 'ok '});
});


*/

module.exports = router;
