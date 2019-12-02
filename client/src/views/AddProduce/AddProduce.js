import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './AddProduce.css'
import { FaSeedling, FaMoneyBillAlt } from 'react-icons/fa'
import { GiFarmTractor } from 'react-icons/gi'
import { TiWeatherSunny, TiDocumentText } from 'react-icons/ti'


class AddProduce extends React.Component {

    state = {
        name: null,
        price: null,
        farm: null,
        description: null,
        season: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddProduce(this.state.name, this.state.price, this.state.farm, this.state.description, this.state.season);
    }

    render() {
        return (
            <div className="forms">
            <legend><span class="title"></span>Add Produce</legend>
            <form onSubmit={this.handleSubmit}>
                <legend><span class="title">1.</span> Produce Info</legend>
                <Form.Group controlId="formBasicText">
                    <Form.Label htmlFor="name"><FaSeedling/> Produce Name</Form.Label>
                    <Form.Control id="name" onChange={this.handleChange} type="text" placeholder="Produce Name" />
                </Form.Group>

                <Form.Group controlId="formBasicNum">
                    <Form.Label htmlFor="price"><FaMoneyBillAlt/> Product Amount</Form.Label>
                    <Form.Control id="price" onChange={this.handleChange} type="number" placeholder="Price per lbs." />
                </Form.Group>

                <legend><span class="title">2.</span> Additional Info</legend>
                
                <Form.Group controlId="formBasicSelect">
                    <Form.Label htmlFor="season"><TiWeatherSunny/> Avaliable Season</Form.Label>
                    <Form.Control id="season" onChange={this.handleChange} type="text" placeholder="Produce Seasons" />
                </Form.Group>
                
                <Form.Group controlId="formBasicDesc">
                    <Form.Label htmlFor="description"><TiDocumentText/> Description</Form.Label>
                    <textarea class="form-control" id="description" onChange={this.handleChange} type="text" rows="4" placeholder="Description" ></textarea>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label htmlFor="farm"><GiFarmTractor/> Farm</Form.Label>
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