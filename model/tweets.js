var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tweets = new Schema({
    
    username: String,
    text: {
        type:String,
        required: true,
		unique: true
    }
    
});

module.exports = mongoose.model('tweets',tweets);



