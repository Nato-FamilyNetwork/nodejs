var express = require('express');
var router = express.Router();
var sms = require('twilio')('AC5ff5dd18f19d07220275ea12f702ee66','a2cf9e91de246d272aaf62179f9169d7');
router.get('/send/:body', function(req, res) {
 sms.sendMessage({
     to: '+21627872134',
     from: '+12673092870',
     body: req.params.body
 },function(err,data){
     if(err)
         console.log(err);
     console.log(data);
           });
    res.send('ok');
});
router.get('/get', function(req, res) {
 sms.messages('SMa6e6067ca66712c3d2b7d2b6077753bb').get(function(err, message) { 
	console.log(message.body); 
});
});
module.exports = router;