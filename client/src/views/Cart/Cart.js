import React from 'react'
import { Redirect, Router  } from 'react-router-dom';
import './Cart.css'
import api from '../../api'
import Card from 'react-bootstrap/Card'
import Axios from 'axios'

/*
- pass in items that have been "added to the cart"
- when a user adds an item to the cart (like adding a building to a list of buildings), add it to the state, this page will just display that state list
- home.js should have functionality that adds items to this items list when an add button is clicked on an item
- item properties: name, price, etc
*/

class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
    }

    getAllCartItems = async() => {
        await api.getAllCartItems().then(cartItems => {
            this.setState({
                cartItems: cartItems.data.data
            })
        })
    }

    componentDidMount = async () => this.getAllCartItems()

    render() {
		if (this.props.currentId === "") {
				alert("User must log in first");
				return(<Redirect to="/signin" />);
		}

        const {cartItems} = this.state;
        const Cart = cartItems.map (cartItem => {
            return(
                <div className="cart">
                    <Card id={cartItem.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{cartItem.name}</Card.Title>
                            <Card.Text>
                                Price: {cartItem.price}
                                <br/>
                                Farm: {cartItem.farm}
                            </Card.Text>
                            <Card.Link href="#" onClick = {() => {                                
                                api.deleteCartItemById(cartItem._id).then(() => {                                    
                                    this.getAllCartItems()}
                                    )
                            }}>Delete Item</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
        return (
            <div class="container">
                <h1 class="text-center">This is the cart page!</h1>
                {Cart}
                <button class="btn-success">Checkout</button>
            </div>
        )
    }
}   

export default Cart;
