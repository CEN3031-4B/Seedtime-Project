import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends React.Component {

    state ={
        username: null,
        password: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value // This is a neat way to match the thing being changed to its new value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleRegister(this.state.username, this.state.password);
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control id="username" onChange={this.handleChange} type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="Password" />
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