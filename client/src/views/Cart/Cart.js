import React from 'react'
import './Cart.css'

/*
- pass in items that have been "added to the cart"
- when a user adds an item to the cart, add it to the state, this page will just display that state list
- item properties: name, price, 
*/

class Cart extends React.Component {
    render(){

        const {items} = this.props; // gets the items list

        const itemList = items.map(item => {
            return(
                <div>
                    <ul>
                        <li>Name: {item.name}</li>
                        <li>Price: {item.price}</li>
                    </ul>
                </div>
            )
        })

        return(
            <div class="container">
                <h1 class="text-center">This is the cart page!</h1>
                {itemList}
                <button class="btn-success">Checkout</button>
            </div>
        )
    }
}

export default Cart;