//A database schema for the inventory items
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Veggie = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        farm: {type: String, required: true},
        description: {type: String, required: true},
        season: {type: String, required: true},
    }
)

module.exports = mongoose.model('veggies', Veggie)