/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var userSchema = new Schema({
<<<<<<< HEAD
	username: { type: String, required : true},
	password: { type: String, required : true},
	//email: { type: String, required : true},
});

var User = mongoose.model('user', userSchema);

=======
	name: { type: String, required : true},
	password: { type: String, required : true},
	email: { type: String, required : true},
});

//Check out - https://mongoosejs.com/docs/guide.html#models
var User = mongoose.model('user', userSchema);

/* Export the model to make it avaiable to other parts of your Node application */
>>>>>>> linking_branch
module.exports = User;
