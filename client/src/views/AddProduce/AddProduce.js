import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddProduce extends React.Component {

    state = {
        name: null,
        price: null,
        farm: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddProduce(this.state.name, this.state.price, this.state.farm);
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicText">
                    <Form.Label htmlFor="name">Item Name</Form.Label>
                    <Form.Control id="name" onChange={this.handleChange} type="text" placeholder="Enter item name" />
                </Form.Group>

                <Form.Group controlId="formBasicNum">
                    <Form.Label htmlFor="price">Price per Unit</Form.Label>
                    <Form.Control id="price" onChange={this.handleChange} type="number" placeholder="Price per Unit" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label htmlFor="farm">Farm</Form.Label>
                    <Form.Control id="farm" onChange={this.handleChange} type="text" placeholder="Farm Name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            </div>
        )
    }

}

export default AddProduce;