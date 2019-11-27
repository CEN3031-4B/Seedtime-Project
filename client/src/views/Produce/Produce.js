import React from 'react';
import './Produce.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import api from '../../api'

class Produce extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            veggies: []
        }
    }

    componentDidMount = async () => {
        await api.getAllVeggies().then(veggies => {
            this.setState({
                veggies: veggies.data.data
            })
        })
    }

    render() {

        // const divStyle = {
        //     display: 'flex: 1',
        //     alignItems: 'center',
        //     justify-content: 'space-between'
        // };
        

        const { veggies} = this.state;
        console.log(veggies);
        const Produce = veggies.map (veggie => {
            return (
                // <div className="bags">
                //     <Card id={veggie.id} style={{ width: '18rem' }}>
                //         <Card.Img variant="top" src=""/>
                //         <Card.Body>
                //             <Card.Title>{veggie.name}</Card.Title>
                //             <Card.Text>
                //                 Price: {veggie.price}
                //                 <br/>
                //                 Farm: {veggie.farm}
                //             </Card.Text>
                //             <div class="links" >
                //                 <Card.Link href="#" onClick = {() => {
                //                     const item = {
                //                         name: veggie.name,
                //                         price: veggie.price,
                //                         farm: veggie.farm
                //                     }
                //                     api.insertCartItem(item)
                //                 }}>Add to Cart
                //                 </Card.Link>
                //             </div>
                //         </Card.Body>
                //     </Card>
                // </div>    
                
                <div className="bags">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="links">
                            <Card.Link href="#">Another Link</Card.Link>
                        </div>
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