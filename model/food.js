var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var foodShema = new Schema({
    
    title:String,
    mx:String,
    family:String,
    contenue: String,
    message: [{ nom:String,vote:String,dates:String,users:String}]
    
    
    
});

module.exports = mongoose.model('food',foodShema);
