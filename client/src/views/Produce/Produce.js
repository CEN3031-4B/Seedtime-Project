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
                <div className="bags">
                    <Card id={veggie.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{veggie.name}</Card.Title>
                            <Card.Text>
                                Price: {veggie.price}
                                <br/>
                                Farm: {veggie.farm}
                            </Card.Text>
                            <Card.Link href="#" onClick = {() => {
                                const item = {
                                    name: veggie.name,
                                    price: veggie.price,
                                    farm: veggie.farm
                                }
                                api.insertCartItem(item)
                            }}>Add to Cart</Card.Link>
                        </Card.Body>
                    </Card>
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