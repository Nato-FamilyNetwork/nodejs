var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var schedualSchema = new Schema({
    
    
    chaine: String,
    program : [{contenue: String, heur: String}]
	
});

module.exports = mongoose.model('schedual',schedualSchema);



