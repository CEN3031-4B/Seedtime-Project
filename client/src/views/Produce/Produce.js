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

        // const divStyle = {
        //     display: 'flex: 1',
        //     alignItems: 'center',
        //     justify-content: 'space-between'
        // };

        const { veggies, isLoading } = this.state;
        console.log(veggies);
        const Produce = veggies.map (veggie => {
        {/* <Alert id="produce-header" variant="success">Welcome to Seedtime Harvest Farms!</Alert> */}
            return (
                <span className="bags">
                    <Card id={veggie.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{veggie.name}</Card.Title>
                            <Card.Text>
                                Price: {veggie.price}
                                <br/>
                                Farm: {veggie.farm}
                            </Card.Text>
                        <Card.Link href="#">Add to Cart</Card.Link>
                    </Card.Body>
                    </Card>
                </span>
                
            );
            // return (
            //     <li>{veggie.name}</li>
            // )
        });
        return (
            <div> 
                {Produce}
            </div>
        )
        
    }
}

export default Produce;