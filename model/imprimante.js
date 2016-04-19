var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var imprimanteShema = new Schema({
    
    
    imprimante: String,
    lien: String,
    photo: String,
    prix:String,
    source: String,
    
    
});

module.exports = mongoose.model('imprimante',imprimanteShema);