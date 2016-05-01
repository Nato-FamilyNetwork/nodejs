var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var foodShema = new Schema({
    
    title:String,
    contenue: String,
    userId:String,
    message: [{ nom:String,vote:String}]
    
    
    
});

module.exports = mongoose.model('food',foodShema);
