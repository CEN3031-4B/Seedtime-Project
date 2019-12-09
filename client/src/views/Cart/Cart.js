import React from 'react'
import { Redirect, Router  } from 'react-router-dom';
import './Cart.css'
import api from '../../api'
import {Card, CardImg, Button, Modal} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
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
            cartItems: [],
            show: false,
            redirect: false
        }
    }

    getAllCartItems = async() => {
        await api.getAllCartItems().then(cartItems => {
            this.setState({
                cartItems: cartItems.data.data
            })
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/produce' />
        }
    }

    Example = () => {
        const handleClose = () => this.setState({show : false})
        const handleShow = () => this.setState({show : true})
      
        return (
          <>
            <Modal show={this.state.show} onHide={handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose()}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose()}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
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
                <div className="cartItems">
                    <Card id={cartItem.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{cartItem.name}</Card.Title>
                            <Card.Text>
                                Price: {cartItem.price}
                                <br/>
                                Farm: {cartItem.farm}
                                <br/>
                                Description: {cartItem.description}
                                <br/>
                                Season: {cartItem.season}
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
            <div>
                <CardImg top width="100%"
                    src="https://www.barillacfn.com/m/articles/1600x280/header-big.jpg">
                </CardImg>
                <Alert id="cart-header" variant="success">
                    <Alert.Heading>Cart:</Alert.Heading>
                </Alert>
                <div className="container">
                    {Cart}
                </div>
                {this.renderRedirect()}
                <Button variant="primary" size="lg" block onClick = {() => {
                    // modal showing successful payment
                    // this.Example()
                    alert('Congratulations, your order has been placed!')


                    // remove all items from the cart
                        cartItems.map(cartItem => {
                            api.deleteCartItemById(cartItem._id)
                            .then(() => {
                                this.getAllCartItems()}
                            )})

                    this.setRedirect()
                    }}>Checkout</Button>

                    {/* <Modal show={this.state.show} onHide={this.handleClose()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Congratulations!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your order has been placed!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose()}>
                            Continue shopping
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
            </div>
        )
    }
}   

export default Cart;
