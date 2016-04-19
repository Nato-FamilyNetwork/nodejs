var express = require('express');
var router = express.Router();
var models =require('../model');
var pc1 = require('../DataMean/tunisianetPC');


router.get('/', function(req, res, next) {
models.pc.find({}).exec(function(err,tunisianetpc){
    if(err) res.send('Error');
    res.render('tunisianetpc.twig', { title: 'List des pcs Tunisia net',tunisianetpcs:tunisianetpc, twitts:req.session.twitts, user:req.user });
    
});
    });

router.post('/', function(req, res, next) {
    if(req.body.search == "")
    {

models.pc.find({"source":req.body.choix}).exec(function(err,tunisianetpcs){
     if(err) res.send('Error');
    res.render('tunisianetpc.twig', { title: 'List des pcs Tunisia net',tunisianetpcs:tunisianetpcs, user:req.user });
    
});
        } else
        {
models.pc.find({"PC":{$regex: ".*"+req.body.search+".", $options:"i"}}).exec(function(err,tunisianetpcs){     if(err) res.send('Error');
    res.render('tunisianetpc.twig', { title: 'List des pcs Tunisia net',tunisianetpcs:tunisianetpcs, user:req.user });
    
});
        }
    });
 


router.get('/tv', function(req, res, next) {
models.tunisianetTV.find({}).exec(function(err,tunisianettvs){
    if(err) res.send('Error');
    res.render('tunisianettv.twig', { title: 'List des tv Tunisia net',tunisianettvs:tunisianettvs, user:req.user });
    
});
    });

router.get('/imprimante', function(req, res, next) {
models.tunisianetImprimante.find({}).exec(function(err,tunisianetimprimantes){
    if(err) res.send('Error');
    res.render('tunisianetimprimantes.twig', { title: 'List des Imprimantes Tunisia net',tunisianetimprimantes:tunisianetimprimantes, user:req.user });
    
});
    });


router.get('/clim', function(req, res, next) {
models.tunisianetClim.find({}).exec(function(err,tunisianetclims){
    if(err) res.send('Error');
    res.render('tunisianetclim.twig', { title: 'List des climatiseurs Tunisia net',tunisianetclims:tunisianetclims, user:req.user });
    
});
    });


router.get('/ghg', function(req, res, next) {
    
   
 var c = new models.tunisianetPC([

{
pc: "PC portable Pc Portable HP Pavilion Gaming 15-ak000nk Touch / i7 6&egrave; G&eacute;n / 8 Go",
marque: " HP Pavilion Gaming 15-ak000nk Touch ",
lien: "http://www.tunisianet.com.tn/ordinateur-portable/15705-pc-portable-hp-pavilion-gaming-15-ak000nk-touch-i7-6e-gen-8-go.html",
photo: "http://www.tunisianet.com.tn/44410-home/pc-portable-hp-pavilion-gaming-15-ak000nk-touch-i7-6e-gen-8-go.jpg",
prix: "2 375,000 DT",
processeur: " Intel Core i7-6700HQ﻿, 6&eacute; G&eacute;n,up to 3.5 Ghz ,6Mo",
ecrant: "Ecran tactile 15.6&quot; ﻿Full HD IPS﻿&nbsp;",
ram: " 8Go de m&eacute;moire ",
diskDure: "Disque SSHD 1To ",
cartGraphique: " Carte graphique NVIDIA GeForce GTX950M, 4Go de m&eacute;moire d&eacute;di&eacute;e﻿&nbsp;"
}

]);
    c.save();
    res.json(c);
});

router.get('/geo', function(req, res, next) {
  res.render('geolocalisation.twig', { title: 'Express', user:req.user });
});



module.exports = router;