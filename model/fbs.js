var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var fbs = new Schema({
    
    message: {
        type:String,
		unique: true
    },
    created_time: Date,
    link: String
    
});

module.exports = mongoose.model('fbs',fbs);



