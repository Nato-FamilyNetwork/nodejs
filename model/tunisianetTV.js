var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tunisianetTVShema = new Schema({
    
    
    tv: String,
    lien: String,
    photo: String,
    prix: String,
    pouces: Number,
    marque: String,
});

module.exports = mongoose.model('tunisianetTV',tunisianetTVShema);



