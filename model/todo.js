var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var todoShema = new Schema({
    
    
     titre: String,
     description: String,
     date: String,
    
    userFK: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
     status:String,
   
});

module.exports = mongoose.model('todo',todoShema);