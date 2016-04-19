var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tunisianetImprimanteShema = new Schema({
    
    imprimante: String,
    lien: String,
    photo: String,
    prix: String,
    specificité: String,
});

module.exports = mongoose.model('tunisianetImprimante',tunisianetImprimanteShema);



