var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
 var team = JSON.parse(fs.readFileSync('/wamp/www/ressources/hygiene.json', "utf-8"));
	res.send(team);
});

module.exports = router;
