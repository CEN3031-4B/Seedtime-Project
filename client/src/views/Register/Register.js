import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Register.css'
import { FaMale, FaAddressBook, FaRegAddressBook, FaLocationArrow, FaCalendarDay } from 'react-icons/fa'
import { GiFarmer } from 'react-icons/gi'
import { TiLockClosedOutline, TiLockClosed, TiLocationOutline, TiLocation } from 'react-icons/ti'


class Register extends React.Component {

    state ={
        fullname: null,
        username: null,
        password: null,
        confirm_pass: null,
        address: null,
        address2: null,
        city: null,
        states: null,
        zip: null,
        day: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value // This is a neat way to match the thing being changed to its new value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleRegister(this.state.fullname, this.state.username, this.state.password, this.state.confirm_pass, 
            this.state.address, this.state.address2, this.state.city, this.state.states, this.state.zip, this.state.day);
    }

    render() {
        return (
            <div className="register">
            <legend><span class="title"></span>Sign Up</legend>
            <form onSubmit={this.handleSubmit}>

                <legend><span class="title">1.</span> Information</legend>

                <Form.Group controlId="formBasicName">
                    <Form.Label htmlFor="fullname"><GiFarmer/> Full Name</Form.Label>
                    <Form.Control id="fullname" onChange={this.handleChange} type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="username"><FaMale/> Username</Form.Label>
                    <Form.Control id="username" onChange={this.handleChange} type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label htmlFor="password"><TiLockClosed/> Password</Form.Label>
                    <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label htmlFor="confirm_pass"><TiLockClosedOutline/> Confirm Password</Form.Label>
                    <Form.Control id="confirm_pass" onChange={this.handleChange} type="password" placeholder="Confirm Password" />
                </Form.Group>

                <legend><span class="title">2.</span> Delivery Details</legend>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label htmlFor="address"><FaAddressBook/> Address</Form.Label>
                    <Form.Control id="address" onChange={this.handleChange} type="text" placeholder="Enter a location" />
                </Form.Group>

                <Form.Group controlId="formBasicAddress2">
                    <Form.Label htmlFor="address2"><FaRegAddressBook/> Address (line 2)</Form.Label>
                    <Form.Control id="address2" onChange={this.handleChange} type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                    <Form.Label htmlFor="city"><TiLocation/> City</Form.Label>
                    <Form.Control id="city" onChange={this.handleChange} type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicState">
                    <Form.Label htmlFor="states"><FaLocationArrow/> State</Form.Label>
                    <Form.Control id="states" onChange={this.handleChange} type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicZip">
                    <Form.Label htmlFor="zip"><TiLocationOutline/> Zip Code</Form.Label>
                    <Form.Control id="zip" onChange={this.handleChange} type="number" />
                </Form.Group>

                <Form.Group controlId="formBasicDay">
                    <Form.Label htmlFor="day"><FaCalendarDay/> Pick Your Delivery Day</Form.Label>
                    <Form.Control id="day" onChange={this.handleChange} type="text" placeholder="Ex: Sunday" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            </div>
        )
    }

}

export default Register;