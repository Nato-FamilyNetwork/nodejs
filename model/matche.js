var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var matcheShema = new Schema({
    
    
    GameResult:String,
    GameAwayImage:String,
    GameAwayTeam:String,
    GameHomeImage:String,
    GameHomeTeam:String,
    Competiton:String,
    GameDate:String,
    
     
    
});

module.exports = mongoose.model('matche',matcheShema);