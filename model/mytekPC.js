var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var mytekPCShema = new Schema({
    
    
    PC: String,
    marque: String,
    lien: String,
    photo: String,
    prix: String,
    processeur: String,
    ram: String,
   
});

module.exports = mongoose.model('mytekPC',mytekPCShema);