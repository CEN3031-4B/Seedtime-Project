import React from 'react';
import './Produce.css'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

class Produce extends React.Component {

    /*TODO: Add state of produce */

    render() {
        return (
            <div>
                <Alert id="produce-header" variant="success">Welcome to Seedtime Harvest Farms!</Alert>
                <Card id="bagCard1" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Sample Grocery Bag</Card.Title>
                    <Card.Text>
                        Insert text describing grocery bag here
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                </Card.Body>
                </Card>

                <Card id="bagCard2" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Sample Grocery Bag</Card.Title>
                    <Card.Text>
                        Insert text describing grocery bag here
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                </Card.Body>
                </Card>

                <Card id="bagCard3" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Sample Grocery Bag</Card.Title>
                    <Card.Text>
                        Insert text describing grocery bag here
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                </Card.Body>
                </Card>

            </div>
            
            
            
        )
    }
    

}

export default Produce;