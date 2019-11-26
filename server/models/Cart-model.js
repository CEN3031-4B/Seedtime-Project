const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        farm: {type: String, required: true},
    }
)

module.exports = mongoose.model('Cart', Cart)