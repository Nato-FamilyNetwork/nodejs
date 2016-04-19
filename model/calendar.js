var mongoose = require ( '../config/db' );
var user = require('./user.js');
var calendar = mongoose.Schema ({
title: String,
start: String,
end: String,
className: String
/*userFK:{type: mongoose.Schema.Types.ObjectId , ref: 'user'}*/
});
module.exports = mongoose.model ( 'calendar' , calendar );