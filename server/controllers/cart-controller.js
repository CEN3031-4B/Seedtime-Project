const Cart = require('../models/Cart-model')
const mongoose = require('mongoose')

createCartItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a cartItem ',
        })
    }

    const cartItem = new Cart(body)

    if (!cartItem) {
        return res.status(400).json({ success: false, error: err })
    }

    cartItem 
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: cartItem._id,
                message: 'cartItem created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'cartItem not created!',
            })
        })
}

deleteCartItem  = async (req, res) => {
    await Cart.findOneAndDelete({ _id: req.params.id }, (err) => {        
        if (err) {
            return res
            .status(404)
            .json({ success: false, error: 'cart item not found' })
        }

        return res.status(200).json({ success: true})
    }).catch(err => console.log(err))
}

getCartItems = async (req, res) => {
    await Cart.find({}, (err, cartItems) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!cartItems) { 
            return res
                .status(404)
                .json({ success: false, error: `cartItems not found` })
        }
        return res.status(200).json({ success: true, data: cartItems })
    }).catch(err => console.log(err))
}

module.exports = {
    createCartItem,
    deleteCartItem,
    getCartItems,
}