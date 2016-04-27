var express = require('express');
var router = express.Router();
var models =require('../model');
 var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
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
	/*
  */  
     urls="http://www.fifa.com/live-scores/teams/";
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      var json = { image : "", name : ""};
       var competition=new Array();
       var dates=new Array();
       var Links=new Array();
       var Imlages=new Array();
       var Enfin=new Array();
       var lien=new Array();
       var rslt=new Array();
      
       
      ($('[class="team-name"]')).each(function (i, allPc) {
           Links.push($(allPc).text());
          //console.log(i);
       
      });
      
       
      
      ($('[class="team5"]')).each(function (i, allPc) {
              awayTeam.push($(allPc).text());
       
      });
      
      ($('[class="team5"]')).each(function (i, allPc) {
              rslt.push($(allPc).text());
       
      });
      url11="http://www.futbol24.com/";
      request(url11, function (error, response, body2) {
  if (!error) {
      var $ = cheerio.load(body2);
      ($('[href^="/national"]')).each(function (i, allPc) {
             dates.push($(allPc).text());
          lien.push(lawej(($(allPc).attr().href),"/","20")+"2015-2016");
          //console.log(lawej(($(allPc).attr().href),"/","20")+"2015-2016");
          //console.log(i);
           var c = new models.league({
                     League:$(allPc).text(),link:substr(lawej(($(allPc).attr().href),"/","20")+"2015-2016",0)
                 });
	              // c.save();
       
      });
       /*
       var arrayContains = Array.prototype.indexOf ?
    function(arr, val) {
        return arr.indexOf(val) > -1;
    } :
    function(arr, val) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === val) {
                return true;
            }
        }
        return false;
    };

function arrayIntersection() {
    var val, arrayCount, firstArray, i, j, intersection = [], missing;
    var arrays = Array.prototype.slice.call(arguments); // Convert arguments into a real array

    // Search for common values
    firstArr = arrays.pop();
    if (firstArr) {
        j = firstArr.length;
        arrayCount = arrays.length;
        while (j--) {
            val = firstArr[j];
            missing = false;

            // Check val is present in each remaining array 
            i = arrayCount;
            while (!missing && i--) {
                if ( !arrayContains(arrays[i], val) ) {
                    missing = true;
                }
            }
            if (!missing) {
                intersection.push(val);
            }
        }
    }
    return intersection;
}
    var intersections= (arrayIntersection(dates,Links));
      
       $ = cheerio.load(body);
      ($('[class="flag"]')).each(function (i, allPc) {
             Imlages.push($(allPc).attr().src);
       
      });
      
     
      var tt=0;
       lien.sort();
       intersections.sort();
                var hh=0;
                while(intersections[hh]!= undefined){
                   json.image=(Imlages[Links.indexOf(intersections[hh])]);
                   console.log(json.image);
                  //console.log(lien[hh]);
                    json.name=(Links[Links.indexOf(intersections[intersections.length-1-hh])]);
                    //console.log(lien[intersections.length-1-hh]);
                 var c = new models.league({
                     League:json.name,logo:json.image,link:lien[intersections.length-1-hh]
                 });
	              // c.save();
                    hh++;
                } 
      
      //console.log(intersections.sort());
      //console.log(Imlages);
             
            intersections.sort();
      Imlages.sort();
      Links.sort();
      
      while(intersections[hh]!= undefined){
                   json.image=(Imlages[Links.indexOf(intersections[hh])]);
                   json.name=(Links[Links.indexOf(intersections[hh])]);
                    console.log(lien[hh]);
                 var c = new models.league({
                     League:json.name,logo:json.image,link:lien[hh]
                 });
	               c.save();
                    hh++;
            
            */
      
      
      }});
      
     console.log("dsqf");
     
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
        
});
    
    models.league.find({}).exec(function(err,tunisianetpc){
    if(err) res.send('Error');
    res.send(tunisianetpc);
    //res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpc, user:req.user });
    
});
    /* 
var options = {
  host: 'localhost',
  path: '/test2015/fifa.php'
};
    http.request(options).end();
	var league = JSON.parse(fs.readFileSync('/wamp/www/test2015/LeagueList.json', "utf-8"));
	
	for(var i=0; i< league.length; i++){
		var c = new models.league({League:league[i].League, link:league[i].link});
	c.save();
	}
    models.league.find({}).exec(function(err,league){
        res.json(league);
    }
                               
                               );
    res.json(league);*/

});

router.get('/:s/:d/:dml/:l/:dd', function(req, res, next) {
	 
    
    
    var u=req.params.d+"/"+req.params.dml+"/"+req.params.l+"/"+req.params.dd+"/";
  urls="http://www.futbol24.com/"+u;
    console.log(urls);
	 
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0; 
      var json = { name : "", points : "", gp : "", goalDiffrence : "",link:""};
       var teams=new Array();
       var points=new Array();
       var played=new Array();
       var diff=new Array();       
       var linkks=new Array();       
       
      ($('[class="team"]')).each(function (i, allPc) {
           teams.push($(allPc).text());
          
       
      });  
      
      ($('[class="team"]')).children().each(function (i, allPc) {
          
           //($(allPc).attr().href);
           linkks.push(substr($(allPc).attr().href,1));
       
      });   
      
      ($('[class="pts"]')).each(function (i, allPc) {
           points.push($(allPc).text());
          //console.log(i);
       
      });
      
      ($('[class="gp"]')).each(function (i, allPc) {
           played.push($(allPc).text());
          //console.log(i);
       
      });
      
      ($('[class="plusminus"]')).each(function (i, allPc) {
           diff.push($(allPc).text());
          //console.log(i);
       
      });
      var c = new models.team();
          
      for(var i=0; i< diff.length; i++){
		
            json.name=teams[i],
            json.points=points[i],
            json.gp=played[i],
            json.goalDiffrence=diff[i],
            json.link=linkks[i]
            c.League="une league";
          c.Teams.push(json);
          
	c.save();
	}
   res.send(c);   
}
    });
    
 

});

router.get('/:s/:t/:n', function(req, res, next) {
	 var u=req.params.s+"/"+req.params.t+"/"+req.params.n;
 urls="http://www.futbol24.com/"+u;
	  
    request(urls, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      i=0,j=0;
      var json = { GameResult : "", GameAwayImage : "", GameAwayTeam : "", GameHomeImage : "", GameHomeTeam : "", Competiton : "", GameDate : ""};
       var competition=new Array();
       var dates=new Array();
       var Links=new Array();
       var Dates=new Array();
       var homeTeam=new Array();
       var awayTeam=new Array();
       var rslt=new Array();
      
       
      ($('[class="comp"]')).each(function (i, allPc) {
             competition.push($(allPc).text());
       
      });
      ($('[class="data timezone"]')).each(function (i, allPc) {
             dates.push($(allPc).text());
       
      });
      
       ($('[class="team4"]')).each(function (i, allPc) {
              homeTeam.push($(allPc).text());
       
      }); 
      
      ($('[class="team5"]')).each(function (i, allPc) {
              awayTeam.push($(allPc).text());
       
      });
      
      ($('[class="dash"]')).each(function (i, allPc) {
              rslt.push($(allPc).text());
       
      });
      		var c = new models.matche();
      
      for(var i=0; i< competition.length; i++){
         
            
            json.GameResult=rslt[i],
            json.GameAwayTeam=awayTeam[i],
            json.GameHomeTeam=homeTeam[i],
            json.Competiton=competition[i],
           json.GameDate=dates[i]
            c.team="une equipe";
        c.matches.push(json);
	c.save();
	}
    
     
      console.log("ok");
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
      res.send(c);  
});
	/*
	for(var i=0; i< matche.length; i++){
		
         
                var c = new models.matche();
            c.LatestResultDate=matche[i].LatestResultDate;
            c.Link=matche[i].Link;
            c.HomeTeam=matche[i].HomeTeam;
            c.HomeImage=matche[i].HomeImage;
            c.AwayTeam=matche[i].AwayTeam;
            c.AwayImage=matche[i].AwayImage;
            c.score=matche[i].score;
            c.NextGameDate=matche[i].NextGameDate;
            c.NextGameLink=matche[i].NextGameLink;
            c.NextGameHomeTeam=matche[i].NextGameHomeTeam;
            c.NextGameHomeImage=matche[i].NextGameHomeImage;
            c.NextGameAwayTeam=matche[i].NextGameAwayTeam;
            c.NextGameAwayImage=matche[i].NextGameAwayImage;
            c.NextGameHour=matche[i].NextGameHour;
         
         if(matche[i].Matches){
            for( var j=0; j<matche[i].Matches.length;j++)
            {
              c.Matches.push(matche[i].Matches[j]);
                
            }
         }
        c.save();
	
	}*/
 
});


module.exports = router;
