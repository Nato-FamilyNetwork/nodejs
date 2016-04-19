var mongoose = require ( '../config/db' );
var map = mongoose.Schema ({
attitude: String,
    longitude: String,
    date: String,
});
module.exports = mongoose.model ( 'maps' , map );