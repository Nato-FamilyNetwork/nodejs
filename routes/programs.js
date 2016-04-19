var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('programs.twig', { title: 'programs', user:req.user });
});

module.exports = router;
