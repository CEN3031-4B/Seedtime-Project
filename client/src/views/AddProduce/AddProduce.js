import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './AddProduce.css'


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
            <div className="forms">
            <form onSubmit={this.handleSubmit}>
                <legend><span class="title">1.</span> Produce Info</legend>
                <Form.Group controlId="formBasicText">
                    <Form.Label htmlFor="name">Produce Name</Form.Label>
                    <Form.Control id="name" onChange={this.handleChange} type="text" placeholder="Produce Name" />
                </Form.Group>

                <Form.Group controlId="formBasicNum">
                    <Form.Label htmlFor="price">Product Amount</Form.Label>
                    <Form.Control id="price" onChange={this.handleChange} type="number" placeholder="Price per lbs." />
                </Form.Group>

                <legend><span class="title">2.</span> Additional Info</legend>
                
                <Form.Group controlId="formBasicSelect">
                    <Form.Label htmlFor="season">Avaliable Season</Form.Label>
                    <select class="form-control"id="seasons">
                        <option>Spring</option>
                        <option>Summer</option>
                        <option>Fall</option>
                        <option>Winter</option>
                    </select>
                </Form.Group>
                
                <Form.Group controlId="formBasicDesc">
                    <Form.Label htmlFor="desc">Description</Form.Label>
                    <textarea class="form-control" id="desc" onChange={this.handleChange} type="text" rows="4" placeholder="Description" ></textarea>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label htmlFor="farm">Farm</Form.Label>
                    <Form.Control id="farm" onChange={this.handleChange} type="text" placeholder="Farm Name" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{backgroundColor:this.state.bgColor}}>
                    Submit
                </Button>
            </form>
            </div>
        )
    }

}

export default AddProduce;