const mongoose = require('mongoose'),
		Schema = mongoose.Schema;

const authSchema = new mongoose.Schema({
		username: { type: String, required: true , unique: true},
		password: { type: String, required: true},

		fullname: { type: String, required: true },
		address: { type: String, required: true },
		address2: { type: String, required: false },
		city: { type: String, required: true },
		states: { type: String, required: true },
		zip: { type: Number, required: true },
		day: { type: String, required: true }
})

module.exports = mongoose.model('User', authSchema)
