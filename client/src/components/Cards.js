//This component creates the cards that are displayed on the homepage. It uses the API to get a 
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import api from '../api'

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            veggies: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        
        await api.getAllVeggies().then(veggies => {
            this.setState({
                veggies: veggies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { veggies, isLoading } = this.state

        const Cards = veggies.map (veggie => {
            return (
                <div className="card Wrapper">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item> Name: {veggie.name}</ListGroup.Item>
                            <ListGroup.Item> Farm: {veggie.farm}</ListGroup.Item>
                            <ListGroup.Item> Price: {veggie.price}</ListGroup.Item>
                            <ListGroup.Item> Description: {veggie.description}</ListGroup.Item>
                            <ListGroup.Item> Season: {veggie.season}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <br/>
                </div>
            );
        });
        return <div>{ Cards }</div>
    }
}
export default Cards