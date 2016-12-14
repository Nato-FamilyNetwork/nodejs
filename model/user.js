var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
//var findorcreate = require('mongoose-findorcreate');
var users = new Schema({
    
   username: String,
    password: String,
	name : String,
	familyname : String,
	birth : Date,
	interest : String,
	newspaper : String,
	familyid : String,
	tel: Number,
	admin : String,
	role : String,
	radio: [String,default:'nrj'],
	news: [String],
	online: String,
	football : {
		league : String,
		team : String
		
	},
    twitter: { id : Number,
				token: String,
				username: String,
				displayName: String,
				lastStatus: String,
				tokenSecret: String
		
		
	},
	facebook: { id : Number,
				access_token: String,
				displayName: String
				
				
				
				
		
		
	},
	instagram: { 
	id : String,
	images: [String],
	token: String
				
				
		
		
	}
	
	
	
	
});
users.plugin(passportLocalMongoose);
//users.plugin(findorcreate);
module.exports = mongoose.model('users',users);
