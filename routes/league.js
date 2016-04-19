var express = require('express');
var router = express.Router();
var models =require('../model');
 var http = require('http');
var fs = require('fs');

router.get('/', function(req, res, next) {
	 
var options = {
  host: 'localhost',
  path: '/ressources/fifa.php'
};
    http.request(options).end();
	var league = JSON.parse(fs.readFileSync('/wamp/www/ressources/LeagueList.json', "utf-8"));
	/*
	for(var i=0; i< league.length; i++){
		var c = new models.league({League:league[i].League, link:league[i].link});
	c.save();
	}
    models.league.find({}).exec(function(err,league){
        res.json(league);
    }
                               
                               );*/
    res.json(league);

});

router.get('/:s', function(req, res, next) {
	 
var options = {
  host: 'localhost',
  path: '/ressources/fifaclub.php?league='+req.params.s
};
    http.request(options).end();
	var team = JSON.parse(fs.readFileSync('/wamp/www/ressources/Teams.json', "utf-8"));
	/*
	for(var i=0; i< team.length; i++){
		var c = new models.team({Team:team[i].Team, Link:team[i].Link});
	c.save();
	}*/
res.send(team);
});

router.get('/:s/:t', function(req, res, next) {
	 
var options = {
  host: 'localhost',
  path: '/ressources/fifaclubmatch.php?team='+req.params.t
};
    http.request(options).end();
	var matche = JSON.parse(fs.readFileSync('/wamp/www/ressources/Club.json', "utf-8"));
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
res.send(matche);
});


module.exports = router;