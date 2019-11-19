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
        console.log("yy")
        
        await api.getAllVeggies().then(veggies => {
            console.log("xxx")
            this.setState({
                veggies: veggies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { veggies, isLoading } = this.state

        // const Loading = <p>Loading...</p>
        const Cards = veggies.map (veggie => {
            return (
                <div className="card Wrapper">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item> Name: {veggie.name}</ListGroup.Item>
                            <ListGroup.Item> Farm: {veggie.farm}</ListGroup.Item>
                            <ListGroup.Item> Price: {veggie.price}</ListGroup.Item>
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