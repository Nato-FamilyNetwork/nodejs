var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var hygieneShema = new Schema({
    
    
    titre: String,
    photo: String,
    prix:String,
    source: String,
    
    
});

module.exports = mongoose.model('hygiene',hygieneShema);