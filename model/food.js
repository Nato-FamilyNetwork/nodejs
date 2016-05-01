var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var foodShema = new Schema({
    
    title:String,
    mx:String,
    contenue: String,
    message: [{ nom:String,vote:String}]
    
    
    
});

module.exports = mongoose.model('food',foodShema);
