const mongoose = require('mongoose'),
		Schema = mongoose.Schema;

const authSchema = new mongoose.Schema({
		username: { type: String, required: true , unique: true},
		password: { type: String, required: true}
})

module.exports = mongoose.model('User', authSchema)
