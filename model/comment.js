var mongoose = require ( '../config/db' );
var map = mongoose.Schema ({
    role: String,
attitude: String,
    longitude: String,
    date: String,
    name : String,
    family:String,
    userFK: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
});
module.exports = mongoose.model ( 'maps' , map );
