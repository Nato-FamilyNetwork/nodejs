var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var twig = require('twig');
var twitter = require('twitter');
var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var request = require('request');
var socket_io = require('socket.io');



var routes = require('./routes/index');
//var users = require('./routes/users');
var mean1 = require('./routes/mean');
var tunisianetPC = require('./routes/tunisianet');
var mytekPC = require('./routes/mytek');
var pcs = require('./routes/pcs');
var tablettes = require('./routes/tablettes');
var tvs = require('./routes/tvs');
var imprimantes = require('./routes/imprimantes');
var food = require('./routes/foods');
var todo = require('./routes/todo');








var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use(session ({
    secret : 'abcd',
    resave: false,
    saveUninitialized:true,
    store: new (require('express-sessions'))({
        storage: 'mongodb',
        instance: mongoose, // optional 
        host: 'nato:natoforthewin@ds015919.mlab.com', // optional 
        port: 15919, // optional  
        collection: 'sessions', // optional 
        expire: 86400 // optional 
    })
    }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

function isAuthenticated(req, res, next) {
     
    if ((req.user != undefined) && (req.user.online))
        return next();

    res.redirect('/');
}

var io = socket_io();
app.io = io;

app.use('/', routes);
//app.use('/users', users);
app.use('/mean', mean1);
app.use('/tunisianetPC', tunisianetPC);
app.use('/mytekPC', mytekPC);
app.use('/final', require('./routes/final'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login')(io));
app.use('/gallery', require('./routes/gallery'));
app.use('/news', require('./routes/medianews'));
app.use('/radio', require('./routes/radio'));
app.use('/map', require('./routes/map'));
app.use('/sms', require('./routes/sms'));
app.use('/needs', require('./routes/needs'));
app.use('/programs', require('./routes/programs'));
app.use('/calendar', require('./routes/calendar'));
app.use('/auth', require('./routes/test'));
app.use('/foods', food);
app.use('/todo', todo);
app.use('/chat', require('./routes/chat')(io));
app.use('/schedule', require('./routes/scheduale'));
app.use('/pcs', pcs);
app.use('/tablettes', tablettes);
app.use('/tvs', tvs);
app.use('/imprimantes', imprimantes);
app.use('/league', require('./routes/league'));



// passport config
var users = require('./model/user');
passport.use(new LocalStrategy(users.authenticate()));
//passport.serializeUser(users.serializeUser());
//passport.deserializeUser(users.deserializeUser());


passport.serializeUser(function(users, done) {
  done(null, users);
});

passport.deserializeUser(function(users, done) {
  done(null, users);
});




//twitter config
passport.use('twitter', new TwitterStrategy({
    consumerKey: 'ndFOIjCSmrjGGvkMbLmOZhV2v',
    consumerSecret: 'IMwzsUao8h4ZQ17AiiggOJQwt7MRzgtttTmSUSKGVwubExc8F2',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Twitter
    process.nextTick(function() { 
 
      users.findOne({ 'twitter.id' : profile.id }, 
        function(err, user) {
          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err)
            return done(err);
 
            // if the user is found then log them in
            if (user) {
               return done(null, user); // user found, return that user
            } else {
               // if there is no user, create them
               var newUser                 = new users();
 
               // set all of the user data that we need
              
		  newUser.twitter.id          = profile.id;
               newUser.twitter.token       = token;
               newUser.twitter.username  = profile.username;
             newUser.twitter.displayName = profile.displayName;
             newUser.username = profile.displayName;
              newUser.twitter.lastStatus = profile._json.status.text;
              newUser.twitter.tokenSecret = tokenSecret;
			  
 
               // save our user into the database
               newUser.save(function(err) {
                 if (err)
                   throw err;
                 return done(null, newUser);
               });
            }
         });
      });
    })
);

/*
//facebook config

passport.use(new FacebookStrategy({
    clientID: '1053800994681151',
    clientSecret: 'b3eddd7bc6b64b6ec86da24ec77d4d4b',
    callbackURL: "http://localhost:3000/auth/facebook/callback"

  },
  function(accessToken, refreshToken, profile, cb) {
    // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Twitter
    process.nextTick(function() { 
 
      users.findOne({ 'facebook.id' : profile.id }, 
        function(err, user) {
          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err)
            return done(err);
 
            // if the user is found then log them in
            if (user) {
               return done(null, user); // user found, return that user
            } else {
               // if there is no user, create them
               var newUser                 = new users();
 
               // set all of the user data that we need
              console.log(profile);
		 /* newUser.facebook.id          = profile.id;
               newUser.facebook.accessToken  = accessToken;
               newUser.facebook.username  = profile.username;
             newUser.facebook.displayName = profile.displayName;
             newUser.username = profile.displayName;
              newUser.facebook.lastStatus = profile._json.status.text;
 
               // save our user into the database
               newUser.save(function(err) {
                 if (err)
                   throw err;
                 return done(null, newUser);
               });
            }
         });
      });
	  console.log("Auth done");
	
    })
);
*/

passport.use('facebook', new FacebookStrategy({
    clientID: '1106786119359677',
    clientSecret: 'aca7178db06263062ae1b554a62ac2fc',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
	enableProof: true
  },
  // facebook will send back the tokens and profile
  function(access_token, refresh_token, profile, done) {
    // asynchronous
    process.nextTick(function() {
     
      // find the user in the database based on their facebook id
      users.findOne({ 'facebook.id' : profile.id }, function(err, user) {
 
        // if there is an error, stop everything and return that
        // ie an error connecting to the database
        if (err)
          return done(err);
 
          // if the user is found, then log them in
          if (user) {
            return done(null, user); // user found, return that user
          } else {
            // if there is no user found with that facebook id, create them
            var newUser = new users();
  
            // set all of the facebook information in our user model
            newUser.facebook.id    = profile.id; // set the users facebook id                 
            newUser.facebook.access_token = access_token; // we will save the token that facebook provides to the user                    
            newUser.facebook.displayName  = profile.displayName;
           newUser.username = profile.displayName;
            // save our user to the database
            newUser.save(function(err) {
              if (err)
                throw err;
 
              // if successful, return the new user
              return done(null, newUser);
            });
         } 
      });
    });
}));





//instagram config
passport.use('instagram', new InstagramStrategy({
    clientID: 'b95a7f2df973406ba8a2caf014ddc570',
    clientSecret: '1f79b90630f8443cac7d6f20546fd399',
    callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Twitter
    process.nextTick(function() { 
 
      users.findOne({ 'instagram.id' : profile.id }, 
        function(err, user) {
          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err)
            return done(err);
 
            // if the user is found then log them in
            if (user) {
               return done(null, user); // user found, return that user
            } else {
               // if there is no user, create them
               var newUser = new users();
 
               // set all of the user data that we need
              
		  newUser.instagram.id = profile.id;
		  newUser.instagram.token = accessToken;
		  //console.log(accessToken);
               var url = 'https://api.instagram.com/v1/users/self/media/recent?access_token='+accessToken;
			   request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
		
		for(var i=0; i<body.data.length; i++){
			newUser.instagram.images.push(body.data[i].images.low_resolution.url);
		}
        
    }
	// save our user into the database
               newUser.save(function(err) {
                 if (err)
                   console.log(err);
                 return done(null, newUser);
               });
});
               
			  
 
               
            }
         });
      });
    })
);

















































 











// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;
