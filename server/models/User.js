/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
	name: { type: String, required : true},
	password: { type: String, required : true},
	//email: { type: String, required : true},
});

var User = mongoose.model('user', userSchema);

module.exports = User;
