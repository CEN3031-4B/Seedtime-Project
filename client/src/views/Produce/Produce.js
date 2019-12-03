import React from 'react';
import './Produce.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import api from '../../api'
import { Row, Col, CardImg } from 'react-bootstrap'

export default({props, veggies, currentId}) => { 
	
    console.log(veggies)     
    const Produce = veggies.map (veggie => {
        return (
            <div class="container-fluid">
                <Row>
                    <Col>
                        <Card id={veggie.id} style={{ width: '18rem' }}>
                            <Card.Body id="details">
                                <Card.Title className="title">{veggie.name}</Card.Title>
                                <Card.Text>
                                    <div className="price">${veggie.price}</div>
                                    <br/>
                                    Description: {veggie.description}
                                    <br/>
                                    Farm: {veggie.farm}
                                    <br/>
                                    Season: {veggie.season}
                                    <br/>                                
                                </Card.Text>
                                <Card.Link href="#" onClick = {() => {

									if (currentId === "") {
											alert("Must login first");
											props.history("/signin");
									} else {
											const item = {
												name: veggie.name,
												description: veggie.description,
												season: veggie.season,
												price: veggie.price,
												farm: veggie.farm
											}
											console.log(item)
											api.insertCartItem(item)
									}
                                }} className="price_button">Add to Cart</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col> 
                </Row>
            </div>
        );
    });
    return (
        <div> 
            <CardImg top width="100%"
                src="https://www.barillacfn.com/m/articles/1600x280/header-big.jpg">
            </CardImg>
            <Alert id="produce-header" variant="success">Welcome to Seedtime Harvest Farms!</Alert>
            <div className="container">
                {Produce}
            </div>
        </div>
    )
}
