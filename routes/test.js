var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/twitter',
  passport.authenticate('twitter'));

router.get('/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
	//console.log(req);
    res.send(req.user);
  });

  router.get('/facebook',
  passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send(req.user);
  });
  
  
  
  router.get('/instagram',
  passport.authenticate('instagram'),function(err){if(err) console.log("enti chkoun"); });

router.get('/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(err, req, res) {
	  if (err) {console.log("lé");}
	  else{
    // Successful authentication, redirect home.
	console.log(req);
    res.send(req.user);
  }});
  
  
module.exports = router;
