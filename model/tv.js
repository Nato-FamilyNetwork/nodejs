var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tvShema = new Schema({
    
    
    tv: String,
    lien: String,
    photo: String,
    prix:String,
    marque:String,
    source: String,
    
    
});

module.exports = mongoose.model('tv',tvShema);