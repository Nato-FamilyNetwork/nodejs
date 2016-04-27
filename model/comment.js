var mongoose = require ( '../config/db' );
var map = mongoose.Schema ({
attitude: String,
    longitude: String,
    date: String,
    userFK: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
});
module.exports = mongoose.model ( 'maps' , map );
