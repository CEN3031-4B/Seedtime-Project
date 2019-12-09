//Express routing for all of the Mongoose functions related to the cart.
const CartController = require('../controllers/cart-controller'),
    express = require('express'), 
    router = express.Router()

router.post('/cartItem', CartController.createCartItem)
router.delete('/cartItem/:id', CartController.deleteCartItem)
router.get('/cartItems', CartController.getCartItems)

module.exports = router;