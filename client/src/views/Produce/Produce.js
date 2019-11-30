import React from 'react';
import './Produce.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import api from '../../api'

class Produce extends React.Component {

    render() {
        const { veggies} = this.props;        
        const Produce = veggies.map (veggie => {
            return (
                <div class="row">
                    <div class="column">
                        <div className="bags">
                        <Card id={veggie.id} style={{ width: '18rem' }}>
                            <Card.Body id="details">
                                <Card.Title className="title">{veggie.name}</Card.Title>
                                <Card.Text>
                                    <div className="price">${veggie.price}</div>
                                    <br/>
                                    The Description: {veggie.description}
                                    <br/>
                                    Farm: {veggie.farm}
                                    <br/>
                                    Season: {veggie.season}
                                    <br/>                                
                                </Card.Text>
                                <Card.Link href="#" onClick = {() => {
                                    const item = {
                                        name: veggie.name,
                                        description: veggie.description,
                                        season: veggie.season,
                                        price: veggie.price,
                                        farm: veggie.farm
                                    }
                                    api.insertCartItem(item)
                                }} className="price_button">Add to Cart</Card.Link>
                            </Card.Body>
                        </Card>
                        </div> 
                    </div>
                </div>
            );
        });
        return (
            <div> 
                <Alert id="produce-header" variant="success">Welcome to Seedtime Harvest Farms!</Alert>
                {Produce}
            </div>
        )
        
    }
}

export default Produce;