var express = require('express');
var router = express.Router();
var models =require('../model');
var pc1 = require('../DataMean/tunisianetPC');
var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
function decodeHTMLEntities (str) {
     
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      str = str.replace(":&#xA0;", '');
      str = str.replace("&#xA0;", '');
   
     

    return str;
  };
function stristr(haystack,needle,bool)
      {
          var pos=0;
          haystack+='';
          pos= haystack.toLowerCase()
                    .indexOf((needle+'')
                             .toLowerCase())
          if(pos==-1){
              return false
          }else{
          if(bool){
              return haystack.substr(0,pos)
          }else{
              return haystack.slice(pos)
          }
          }
          };
      function substr (str, start, len) {
   
  var i = 0,
    allBMP = true,
    es = 0,
    el = 0,
    se = 0,
    ret = ''
  str += ''
  var end = str.length

  // BEGIN REDUNDANT
  this.php_js = this.php_js || {}
  this.php_js.ini = this.php_js.ini || {}
  // END REDUNDANT
  switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
    case 'on':
    // Full-blown Unicode including non-Basic-Multilingual-Plane characters
    // strlen()
      for (i = 0; i < str.length; i++) {
        if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
          allBMP = false
          break
        }
      }

      if (!allBMP) {
        if (start < 0) {
          for (i = end - 1, es = (start += end); i >= es; i--) {
            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
              start--
              es--
            }
          }
        } else {
          var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
          while ((surrogatePairs.exec(str)) != null) {
            var li = surrogatePairs.lastIndex
            if (li - 2 < start) {
              start++
            } else {
              break
            }
          }
        }

        if (start >= end || start < 0) {
          return false
        }
        if (len < 0) {
          for (i = end - 1, el = (end += len); i >= el; i--) {
            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
              end--
              el--
            }
          }
          if (start > end) {
            return false
          }
          return str.slice(start, end)
        } else {
          se = start + len
          for (i = start; i < se; i++) {
            ret += str.charAt(i)
            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
            // Go one further, since one of the "characters" is part of a surrogate pair
              se++
            }
          }
          return ret
        }
        break
      }
    // Fall-through
    case 'off':
    // assumes there are no non-BMP characters;
    //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
    default:
      if (start < 0) {
        start += end
      }
      end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start)
    // PHP returns false if start does not fall within the string.
    // PHP returns false if the calculated end comes before the calculated start.
    // PHP returns an empty string if start and end are the same.
    // Otherwise, PHP returns the portion of the string from start to end.
      return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end)
  }
  // Please Netbeans
  return undefined
};
      function explode (delimiter, string, limit) {
  //  discuss at: http://phpjs.org/functions/explode/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //   example 1: explode(' ', 'Kevin van Zonneveld');
  //   returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

  if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null
  if (delimiter === '' || delimiter === false || delimiter === null) return false
  if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string ===
    'object') {
    return {
      0: ''
    }
  }
  if (delimiter === true) delimiter = '1'

  // Here we go...
  delimiter += ''
  string += ''

  var s = string.split(delimiter)

  if (typeof limit === 'undefined') return s

  // Support for limit
  if (limit === 0) limit = 1

  // Positive limit
  if (limit > 0) {
    if (limit >= s.length) return s
    return s.slice(0, limit - 1)
      .concat([s.slice(limit - 1)
        .join(delimiter)
      ])
  }

  // Negative limit
  if (-limit >= s.length) return []

  s.splice(s.length + limit)
  return s
}
     
      function stripos (f_haystack, f_needle, f_offset) {
 

  var haystack = (f_haystack + '')
    .toLowerCase()
  var needle = (f_needle + '')
    .toLowerCase()
  var index = 0

  if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
    return index
  }
  return false
};
      function strlen (string) {
 

  var str = string + ''
  var i = 0,
    chr = '',
    lgth = 0

  if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] || this.php_js.ini[
      'unicode.semantics'].local_value.toLowerCase() !== 'on') {
    return string.length
  }

  var getWholeChar = function (str, i) {
    var code = str.charCodeAt(i)
    var next = '',
      prev = ''
    if (0xD800 <= code && code <= 0xDBFF) {
      // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
      if (str.length <= (i + 1)) {
        throw 'High surrogate without following low surrogate'
      }
      next = str.charCodeAt(i + 1)
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate'
      }
      return str.charAt(i) + str.charAt(i + 1)
    } else if (0xDC00 <= code && code <= 0xDFFF) {
      // Low surrogate
      if (i === 0) {
        throw 'Low surrogate without preceding high surrogate'
      }
      prev = str.charCodeAt(i - 1)
      if (0xD800 > prev || prev > 0xDBFF) {
        // (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        throw 'Low surrogate without preceding high surrogate'
      }
      // We can pass over low surrogates now as the second component in a pair which we have already processed
      return false
    }
    return str.charAt(i)
  }

  for (i = 0, lgth = 0; i < str.length; i++) {
    if ((chr = getWholeChar(str, i)) === false) {
      continue
    } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part
    lgth++
  }
  return lgth
};
      
      function lawej(data,start,end)
      {
        data = stristr(data, start);  
        data = substr(data, strlen(start));   
        stop = stripos(data, end);    
        data = substr(data, 0, stop);
          return data;
      };

router.get('/', function(req, res, next) {
    
    ////////Techno pro okkkkkk5
    
    url = "http://www.technopro-online.com/fr/75-prix-pc-portable-hp-dell-asus-lenovo-acer-Tunisie";
   
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      allPcs = $("[id=\"product_list\"]").children(),i=1,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var allImages=$('[class="firstimg"]');
       var allLinks=$("[id=\"product_list\"]").html();
      var cp=0;
       var arrayPrix= new Array();
       var ramArray= new Array();
       var arrayLien= new Array();
       var marqueArray= new Array();
      var ktiba=String,separate_results=String,des=String,marque=String,mst=String;
      //recuperation de tout les liens
      separate_results = explode("<li class=\"", allLinks);
      separate_results.forEach(function (allLink,i) {
          ktiba=lawej(lawej(allLink,"<h5>","</h5>"),"<a href=\"","\" title");
          arrayLien.push(ktiba);
          ktiba=lawej(allLink,"<h5>","</h5>")
          des=lawej(ktiba,">","<");
                                 

						mst=explode("/",des);
          //mst.forEach(function (xd,cp) {
            //          if(cp==2)ram.push(xd);
            //});
            marqueArray.push(explode(" ",mst[0])[2]);
          
      });
      
      var prix=$('[class="price"]');//tout les prix
    
      //recuperation de tout les prix
      prix.each(function (i, pr) {
          arrayPrix.push($(pr).text());
          
      });
      
      
      
      //console.log($('[class="price"]').children());
      var techPC= new Array();
      var images= new Array();
      var nom= String;
      var marque= String,
              diskDure=String,
               processeur=String,
               ecrant=String,
               tnpc=String,
               pc=String,
               ram=String,
               cartGraphique=String;
      
      //Recuperation et stockage des images dans un tableau 'images'
      allImages.each(function (i, allImage) {
         images.push($(allImage).attr().src);
          techPC.push($(allImage).attr().alt);
      });
       
      //Recuperation et stockage des information dans un tableau 'x'
      
       console.log("ok technopro");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
    for(var i=0; i< techPC.length; i++){
		var c = new models.pc({ram:ramArray[i],lien:arrayLien[i],photo:images[i], prix:arrayPrix[i],PC:techPC[i], source:"technopro",marque:marqueArray[i]});
	c.save();
	}
 
    
});
  /////////////////////techno pro okkkkk  
    
    
    
    //////tunisia net okkkk
	  
 url = "http://www.tunisianet.com.tn/301-ordinateur-portable";
  //tunisianet portable
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      allPcs = $("[id=\"produit_liste_texte\"]").children(),i=0,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var allImages=$('[alt^="Pc"]');
       var allLinks=$('[title^="Pc"]');
       var arrayPrix= new Array();
       var arrayLien= new Array();
      
      //recuperation de tout les liens
      allLinks.each(function (i, allLink) {
         arrayLien.push($(allLink).attr().href);
          
      });
      
      var prix=$('[class="price"]');//tout les prix
    
      //recuperation de tout les prix
      prix.each(function (i, pr) {
          arrayPrix.push($(pr).text());
          
      });
      
      
      
      //console.log($('[class="price"]').children());
      var techPC= new Array();
      var images= new Array();
      var nom= String;
      var marque= String,
              diskDure=String,
               processeur=String,
               ecrant=String,
               tnpc=String,
               pc=String,
               ram=String,
               cartGraphique=String;
      
      //Recuperation et stockage des images dans un tableau 'images'
      allImages.each(function (i, allImage) {
          images.push($(allImage).attr().src);
          
      });
       
      //Recuperation et stockage des information dans un tableau 'x'
       allPcs.each(function (i, allPc) {
           
           
            tnpc= $(allPc).text();
            
        //    x.push(marque);
           
               pc=lawej(tnpc,"Pc","/");
               diskDure=lawej(tnpc,"Disque","-");
               processeur=lawej(tnpc,"Processeur","-");
               ecrant=lawej(tnpc,"Ecran","-");
               marque= (lawej(pc+"+"," Portable","+") != "") ? lawej(pc+"+","portable","+") : lawej(pc+"+"," portable","+");             
               ram=parseInt(lawej(lawej(tnpc,"/","+")+"+","/","+"),10)+"Go";
           ram= (ram == "NaNGo")? lawej(tnpc,"- Mémoire","-"): ram;
               cartGraphique=lawej(tnpc,"Carte graphique","-");
            
           var c = new models.pc({marque:marque,PC:pc,ram:ram,photo:images[i],prix:arrayPrix[i],lien:arrayLien[i],source:"tunisianet"});
	c.save();
        });  
       console.log("ok tunisia net");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
  
});
    /////tunisia net okkk
    
    
   
 urlMytek ="http://www.mytek.tn/13-pc-portables-tunisie?id_category=13&n=114";
request(urlMytek, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      allPcs = $("[class=\"product-container\"]").children(),i=0,j=0;
      var gg =$("[class=\"product_list grid \"]").html();
      var compteur=1;
      var variable=String,unektiba=String;
      var ramAray= new Array();
      var desvariable=explode("<li class=\"ajax_block_product col-xs-12",gg); 
      
      desvariable.forEach(function (variable,compteur) {
                unektiba=lawej(variable,"itemprop=\"description\">","</p>");
								console.log(parseInt(decodeHTMLEntities(lawej(unektiba,"RAM",","))));
      });
      
      var json = { title : "", release : "", rating : ""};
       var allImages=$('[class="replace-2x img-responsive"]');
       var allLinks=$('[class="product_img_link"]');
        var arrayPrix= new Array();
       var arrayLien= new Array();
      
      //recuperation de tout les liens
     allLinks.each(function (j, allLink) {
         arrayLien.push($(allLink).attr().href);
          
      });
      
        
      var prix=$('[class="price product-price"]');//tout les prix
      
      //recuperation de tout les prix
      prix.each(function (j, pr) {
         arrayPrix.push($(pr).text());
          
      });
       
      
      
      //console.log($('[class="price"]').children());
      var xx= new Array();
      var images= new Array();
      var nom= String;
      var marque= String,
              diskDure=String,
               processeur=String,
               ecrant=String,
               tnpc=String,
               pc=String,
               ram=String,
               cartGraphique=String;
      
      //Recuperation et stockage des images dans un tableau 'images'
      allImages.each(function (j, allImage) {
          images.push($(allImage).attr().src);
          
      });
      
      
       
      //Recuperation et stockage des information dans un tableau 'x'
       allPcs.each(function (j, allPc) {
           
           
            tnpc= $(allPc).text();
            //console.log(tnpc);
        //    x.push(marque);
           //console.log(tnpc);
            pc=lawej(tnpc,"P","  ");
           ecrant=lawej(tnpc,"Ecran:",",");
            processeur=lawej(tnpc,"Processeur",",");
            
           diskDure=lawej(tnpc,"Disque Dur",",");
           cartGraphique=lawej(tnpc,"Carte graphique:",",");
           marque= (lawej(pc+"+"," Portable","+") != "") ? lawej(pc+"+","portable","+") : lawej(pc+"+"," portable","+");  
           var c = new models.pc({marque:marque,PC:pc,ram:ram,photo:images[j],prix:arrayPrix[j],lien:arrayLien[j],source:"mytek"});
          // console.log(arrayPrix[i]);
 
              
	if(arrayPrix[j]!=undefined)c.save();
           
        });  
        
      console.log("mytek ok");
       
     
  } else {
    console.log("We’ve encountered an error: " + error);
  }

});
  
    
	  
	 
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
