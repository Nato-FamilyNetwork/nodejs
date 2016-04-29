var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var models =require('../model');
var fs=require('fs');
 
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
  //  discuss at: http://phpjs.org/functions/substr/
  //     version: 909.322
  // original by: Martijn Wieringa
  // bugfixed by: T.Wild
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Theriault
  //        note: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
  //   example 1: substr('abcdef', 0, -1);
  //   returns 1: 'abcde'
  //   example 2: substr(2, 0, -6);
  //   returns 2: false
  //   example 3: ini_set('unicode.semantics',  'on');
  //   example 3: substr('a\uD801\uDC00', 0, -1);
  //   returns 3: 'a'
  //   example 4: ini_set('unicode.semantics',  'on');
  //   example 4: substr('a\uD801\uDC00', 0, 2);
  //   returns 4: 'a\uD801\uDC00'
  //   example 5: ini_set('unicode.semantics',  'on');
  //   example 5: substr('a\uD801\uDC00', -1, 1);
  //   returns 5: '\uD801\uDC00'
  //   example 6: ini_set('unicode.semantics',  'on');
  //   example 6: substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
  //   returns 6: '\uD801\uDC00z'
  //   example 7: ini_set('unicode.semantics',  'on');
  //   example 7: substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
  //   returns 7: '\uD801\uDC00z'

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
      function str_replace (search, replace, subject, count) {
  //  discuss at: http://phpjs.org/functions/str_replace/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Gabriel Paderni
  // improved by: Philip Peterson
  // improved by: Simon Willison (http://simonwillison.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Anton Ongson
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Oleg Eremeev
  // bugfixed by: Glen Arason (http://CanadianDomainRegistry.ca)
  // bugfixed by: Glen Arason (http://CanadianDomainRegistry.ca)
  //    input by: Onno Marsman
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Oleg Eremeev
  //        note: The count parameter must be passed as a string in order
  //        note: to find a global variable in which the result will be given
  //   example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
  //   returns 1: 'Kevin.van.Zonneveld'
  //   example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
  //   returns 2: 'hemmo, mars'
  //   example 3: str_replace(Array('S','F'),'x','ASDFASDF');
  //   returns 3: 'AxDxAxDx'
  //   example 4: str_replace(['A','D'], ['x','y'] , 'ASDFASDF' , 'cnt');
  //   returns 4: 'xSyFxSyF' // cnt = 0 (incorrect before fix)
  //   returns 4: 'xSyFxSyF' // cnt = 4 (correct after fix)

  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]'
  s = [].concat(s)

  if (typeof (search) === 'object' && typeof (replace) === 'string') {
    temp = replace
    replace = new Array()
    for (i = 0; i < search.length; i += 1) {
      replace[i] = temp
    }
    temp = ''
    r = [].concat(replace)
    ra = Object.prototype.toString.call(r) === '[object Array]'
  }

  if (count) {
    this.window[count] = 0
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + ''
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0]
      s[i] = (temp)
        .split(f[j])
        .join(repl)
      if (count) {
        this.window[count] += ((temp.split(f[j]))
          .length - 1)
      }
    }
  }
  return sa ? s : s[0]
}
      function stripos (f_haystack, f_needle, f_offset) {
  //  discuss at: http://phpjs.org/functions/stripos/
  // original by: Martijn Wieringa
  //  revised by: Onno Marsman
  //   example 1: stripos('ABC', 'a');
  //   returns 1: 0

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
  //  discuss at: http://phpjs.org/functions/strlen/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Sakimori
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Kirk Strobeck
  // bugfixed by: Onno Marsman
  //  revised by: Brett Zamir (http://brett-zamir.me)
  //        note: May look like overkill, but in order to be truly faithful to handling all Unicode
  //        note: characters and to this function in PHP which does not count the number of bytes
  //        note: but counts the number of characters, something like this is really necessary.
  //   example 1: strlen('Kevin van Zonneveld');
  //   returns 1: 19
  //   example 2: ini_set('unicode.semantics', 'on');
  //   example 2: strlen('A\ud87e\udc04Z');
  //   returns 2: 3

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
      function formaty(ch)
        {
            var ch1=ch
            .replace(/(?:\r\n|\r|\n)/g,"")
             .replace("                ","")
            .replace("                  ","")
            .replace("                  ","")
            .replace("                                      ","")
            .replace("                    ","")
           .replace("                                  ","");
            return ch1;
        }
      function lawej(data,start,end)
      {
        data = stristr(data, start);  
        data = substr(data, strlen(start));   
        stop = stripos(data, end);    
        data = substr(data, 0, stop);
          return data;
      };
/* GET home page. */
router.get('/', function(req, res, next) {
    /*
    for(var gg=1;gg<10;gg++){
     urlGeant ="http://www.geant.tn/Fr/alimentaire_201_66_P"+gg;
        //console.log(urlGeant);
    request(urlGeant, function (error, response, body) {
  if (!error) {
      console.log(urlGeant);
        var json = { title : "", release : "", rating : ""};
      var i=0,j=0,k=0,l=0,a=String,ktiba=String,separate_results=String,separate_result=String,s2=String,
          s3=String,
          hez=String,
          hez3=String,
          prix=String,
          offre=String,
          off=String,
          PriceArray= new Array(),
          ImagesArray= new Array(),
          KtibaArray= new Array(),
          OffreArray= new Array(),
          scraped_page=String,scraped_data=String;
    var $ = cheerio.load(body);
      scraped_page = $("[class=\"body\"]").html();
      scraped_data = lawej(scraped_page, "bloc_content_interne\">", "<div class=\"right\">")+"++";    
      scraped_data = lawej(scraped_data, "<div class=\"margin_bottom20 paragraphe\"></div>", "++");    
        
      separate_results = explode("<div class=\"bloc_blanc_border\">", scraped_data);
        var arr = new Array(),arr1 = new Array(),arr2 = new Array(),arr3 = new Array();
        
      separate_results.forEach(function (separate_result,i )
      {
          s2=explode("<tr>",separate_result );
            s2.forEach(function(hez,k)
                       {
                        s3=explode("<td",hez);
                            s3.forEach(function(hez3,l)
                                       {
                                        prix= lawej(hez3, "<span class=\"prix\">", "</span>");
                                        PriceArray.push(prix);
                                        // console.log(prix);
                                  offre=lawej(hez3, "<a class=\"pdt_desc\"", "</td>")+'+';
                                off=str_replace("<br />",",",lawej(offre, ">", "</a>+"));
                                if(off) {OffreArray.push(off);
                               //  console.log(off);
                                        }  
                                                taswira=lawej(hez3, "<img src=\"", "\"");
                               // console.log(taswira);
                                if(taswira) ImagesArray.push("http://www.geant.tn/Fr/"+taswira);
                                
                                ktiba=lawej(hez3, "title=\"", "\"");
                                if(ktiba) { KtibaArray.push(ktiba)};
                           
                             
                         
         // var c = new models.hygiene({offre:off,titre:ktiba,photo:taswira,prix:prix,source:"geant"});
                              // c.save();
                      
                                // console.log(l);
                                
                                        })
                
                        })
        
      });
       
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
        
         

});
    }
    */
    
    
     url="https://www.carrefourtunisie.com/produits-nos-rayons-carrefour";
    request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      allPcs = $("[id=\"produit_liste_texte\"]").children(),i=0,j=0;
      var json = { pc : "", marque : "", diskDure : "", processeur : "", ecrant : "", ram : "", cartGraphique : "",image:""};
       var allImages=new Array();
       var Prices=new Array();
       var Kitba=new Array();
      
      //recuperation de tout les liens
 
      
      var prix=$('[class="price clearfix"]');//tout les prix
      //recuperation de tout les prix
      prix.each(function (i, pr) {
          Prices.push(formaty($(pr).text()));
          
      });
      
      var ktiba=$('[href="#slide"] p');//tout les prix
      ktiba.each(function (i, pr) {
          Kitba.push(formaty($(pr).text()));
      });
      
      var images=$('[href="#slide"] img');//tout les prix
       images.each(function (i, pr) {
          allImages.push($(pr).attr().src);
           
           var c = new models.hygiene({photo:"https://www.carrefourtunisie.com/"+allImages[i],prix:Prices[i],source:"carrefoure",titre:Kitba[i]});
                             //  c.save();
      });
  }
    
    });
    
    
    models.hygiene.find({}).exec(function(err,team){
    if(err) res.send('Error');
    res.send(team);
    //res.render('pcs.twig', { title: 'List des pcs',tunisianetpcs:tunisianetpc, user:req.user });
    
});
  
});


router.get('/promote', function(req, res) {
    
    model.hygiene.find().limit(-1).skip(parseInt(Math.random()*30)).exec(function(err,resu){
		
		if(err) res.send(404,err);
		res.send(resu);
		
	});
});

module.exports = router;
