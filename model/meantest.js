var mongoose = require('../config/db');

var meantestShema = mongoose.Schema({
    
    
    title: String,
});

module.exports = mongoose.model('meantest',meantestShema);