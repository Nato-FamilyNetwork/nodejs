var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var newsSchema = new Schema({
    
    
    image: String,
    titre: String,
    lien: String,
    date: String,
    source : String,
    category: String
    
    
    
});

module.exports = mongoose.model('newsTounsya',newsSchema);
