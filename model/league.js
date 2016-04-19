var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var leagueShema = new Schema({
    
    
     League: String,
    link: String,
    logo:String
     
    
});

module.exports = mongoose.model('league',leagueShema);