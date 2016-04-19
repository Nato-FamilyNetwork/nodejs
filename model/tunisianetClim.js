var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tunisianetClimShema = new Schema({
    
    Climatisation: String,
    lien: String,
    photo: String,
    prix: String,
    marque:String,
    specificité: String,
});

module.exports = mongoose.model('tunisianetClim',tunisianetClimShema);



