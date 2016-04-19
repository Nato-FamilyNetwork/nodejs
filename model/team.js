var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var teamShema = new Schema({
    
    
     Team: String,
    Link: String,
     
    
});

module.exports = mongoose.model('team',teamShema);