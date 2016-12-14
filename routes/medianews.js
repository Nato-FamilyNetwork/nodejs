var express = require('express');
var router = express.Router();
var models =require('../model');
var pc1 = require('../DataMean/tunisianetPC');
var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

router.get('/tounsya', function(req, res, next) {
	 urls="http://www.leconomistemaghrebin.com/category/monde/international/";
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      
       var allImages=new Array();
       var Titles=new Array();
       var Links=new Array();
       var Dates=new Array();
      
        
      ($('[class="entry entry-small"]').children()).each(function (i, allPc) {	      
      Titles.push($(allPc).text());
      });
      
      ($('[class="date updated"]').children()).each(function (i, allPc) {
      Dates.push($(allPc).text());
      });
       var allImage=$('[class="attachment-post-thumbnail size-post-thumbnail wp-post-image"]');
       allImage.each(function (i, allImage) {
          allImages.push($(allImage).attr().src);
          
      });
 $('[rel="bookmark"]').each(function (i, allImage) {      
      Links.push($(allImage).attr(). href);
  });
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
        for(var cp=0; cp<Links.length;cp++)
      {
        var c = new models.newsTounsya({image:allImages[cp], titre:Titles[cp],lien:Links[cp], date:Dates[cp],category:"world",source:"Leconomistemaghrebin"});
	c.save();
      }
});
	 
    
   urls= "http://www.leconomistemaghrebin.com/category/nation/politique/";
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      
       var allImages=new Array();
       var Titles=new Array();
       var Links=new Array();
       var Dates=new Array();
      
         
      ($('[class="entry entry-small"]').children()).each(function (i, allPc) {
      Titles.push($(allPc).text());
      });
      
      ($('[class="date updated"]').children()).each(function (i, allPc) {
      Dates.push($(allPc).text());
      });
       var allImage=$('[class="attachment-post-thumbnail size-post-thumbnail wp-post-image"]');
       allImage.each(function (i, allImage) {
          allImages.push($(allImage).attr().src);
          
      });
 $('[rel="bookmark"]').each(function (i, allImage) {      
      Links.push($(allImage).attr(). href);
  });
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
  
    
        for(var cp=0; cp<Links.length;cp++)
      {
        var c = new models.newsTounsya({image:allImages[cp], titre:Titles[cp],lien:Links[cp], date:Dates[cp],category:"politics" ,source:"Leconomistemaghrebin"});
	c.save();
      }
});
	 
    
     urls= "http://www.leconomistemaghrebin.com/category/nation/regions-nation/";
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      
       var allImages=new Array();
       var Titles=new Array();
       var Links=new Array();
       var Dates=new Array();
      
         
      ($('[class="entry entry-small"]').children()).each(function (i, allPc) {
      Titles.push($(allPc).text());
      });
      
      ($('[class="date updated"]').children()).each(function (i, allPc) {
      Dates.push($(allPc).text());
      });
       var allImage=$('[class="attachment-post-thumbnail size-post-thumbnail wp-post-image"]');
       allImage.each(function (i, allImage) {
          allImages.push($(allImage).attr().src);
          
      });
 $('[rel="bookmark"]').each(function (i, allImage) {      
      Links.push($(allImage).attr(). href);
  });
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
        for(var cp=0; cp<Links.length;cp++)
      {
        var c = new models.newsTounsya({image:allImages[cp], titre:Titles[cp],lien:Links[cp], date:Dates[cp],category:"tunisie",source:"Leconomistemaghrebin"});
	c.save();
      }
});
	
    
     urls= "http://www.leconomistemaghrebin.com/category/culture/evenement/";
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      
       var allImages=new Array();
       var Titles=new Array();
       var Links=new Array();
       var Dates=new Array();
      
       
      ($('[class="entry entry-small"]').children()).each(function (i, allPc) {
      Titles.push($(allPc).text());
      });
      
      ($('[class="date updated"]').children()).each(function (i, allPc) {
      Dates.push($(allPc).text());
      });
       var allImage=$('[class="attachment-post-thumbnail size-post-thumbnail wp-post-image"]');
       allImage.each(function (i, allImage) {
          allImages.push($(allImage).attr().src);
          
      });
 $('[rel="bookmark"]').each(function (i, allImage) {      
      Links.push($(allImage).attr(). href);
  });
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
        for(var cp=0; cp<Links.length;cp++)
      {
        var c = new models.newsTounsya({image:allImages[cp], titre:Titles[cp],lien:Links[cp], date:Dates[cp],category:"events", source:"Leconomistemaghrebin"});
	c.save();
      }
        
        
        models.newsTounsya.find({}).exec(function(err,tunisnews)
    {
    if(err) res.send('Error');
   res.send(tunisnews);    
    });
});
	
    
    
    
});




    

	
	
	
	
	
	
	
	

	
	
	
	
	
	

module.exports = router;
