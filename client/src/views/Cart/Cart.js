import React from 'react'
import './Cart.css'

/*
- pass in items that have been "added to the cart"
- when a user adds an item to the cart (like adding a building to a list of buildings), add it to the state, this page will just display that state list
- home.js should have functionality that adds items to this items list when an add button is clicked on an item
- item properties: name, price, etc
*/

const Cart = ({items}) => {
    //const {items} = props; // gets the items list

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

export default Cart;