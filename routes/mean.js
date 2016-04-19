var express = require('express');
var router = express.Router();
var models =require('../model');


router.get('/', function(req, res, next) {
 var c = new models.meantest({title:"first test"});
    c.save();
    res.json(c);
});



module.exports = router;