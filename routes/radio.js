var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('radio.twig', { title: 'Radio', user:req.user });
});

module.exports = router;
