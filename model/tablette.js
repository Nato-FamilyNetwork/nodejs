var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tabletteShema = new Schema({
    
    
    tablette: String,
    marque: String,
    lien: String,
    photo: String,
    prix: String,
    source: String,
   
});

module.exports = mongoose.model('tablette',tabletteShema);