var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var tunisianetPCShema = new Schema({
    
    
     marque: String,
    lien: String,
    photo: String,
    prix:String,
    PC:String,
    source: String,
    ram:String,
    
});

module.exports = mongoose.model('pc',tunisianetPCShema);