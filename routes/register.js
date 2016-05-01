var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../model/user');


 router.get('/', function(req, res, next) {
 res.render('register.twig', { title: 'Register to family network '});
});

router.post('/', function(req, res, next) {
    Account.register(new Account({ username : req.body.username, name : req.body.name, familyname : req.body.familyname,tel : req.body.tel,admin : req.body.admin,role:req.body.role, birth : req.body.birth, interest : req.body.interest, newspaper : req.body.news, familyid:req.body.fid }), req.body.password, function(err, account) {
        if (err) {
          //return res.render('register.twig', {info: "Sorry. That username already exists. Try again."});
		  res.send(401);
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                //res.redirect('/final');
				res.send(req.user);
            });
        });
    });
});






module.exports = router;
