var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var foodShema = new Schema({
    
    title:String,
    contenue: String,
    userId:String,
    message: [{ nom:String,vote:Number}]
    
    
    
});

module.exports = mongoose.model('food',foodShema);
