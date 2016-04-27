var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var teamShema = new Schema({
    
    
     League: String,     
    Teams: [{
    name:String,
    points:String,
    gp:String,
    goalDiffrence:String,
        link:String
    }]
     
    
});

module.exports = mongoose.model('team',teamShema);
