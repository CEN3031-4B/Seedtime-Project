/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, required : true},
	password: { type: String, required : true},
	//email: { type: String, required : true},

	fullname: { type: String, required: true },
	address: { type: String, required: true },
	address2: { type: String, required: false },
	city: { type: String, required: true },
	states: { type: String, required: true },
	zip: { type: Number, required: true },
	day: { type: String, required: true }
});

var User = mongoose.model('user', userSchema);

module.exports = User;
