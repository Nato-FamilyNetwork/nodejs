var express = require('express');
var router = express.Router();
var models =require('../model');



router.get('/', function(req, res, next) {
models.mytekPC.find({}).exec(function(err,mytekpcs){
    if(err) res.send('Error');
    res.render('mytekpc.twig', { title: 'List des pcs mytek ',mytekpcs:mytekpcs, user:req.user });
    
});
    });


module.exports = router;