import React from 'react';
import { Route, Switch, Redirect, BrowserRouter  } from 'react-router-dom';
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Cart from './views/Cart/Cart'
import Produce from './views/Produce/Produce'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import AddProduce from './views/AddProduce/AddProduce'
import About from './views/About/About'
import axios from 'axios';
import api from './api'
import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
            currentId: "",
            veggies: []
    }
}


  componentDidMount(){
    this.getAllVeggies()
  }

  getAllVeggies = () => {
    api.getAllVeggies().then(veggies => {
      this.setState({
          veggies: veggies.data.data
      })
    })
  }

  onSearch = async searchValue => {
    if (!searchValue){
      return this.getAllVeggies();      
    }    
    const veggies = await api.searchVeggies(searchValue);        
    this.setState({veggies: veggies.data.data});
  }

  updateId(value) {
		  this.setState({currentId: value});
  }

  handleRegister = (fullname, username, password, confirm_pass, address, address2, city, states, zip, day) => {

    // console.log(username);
    // console.log(password);
    console.log('Username and Password submitted.');
    const userData = {
      fullname: fullname,
      username: username,
      password: password,
      confirm_pass: confirm_pass,
      address: address,
      address2: address2,
      city: city,
      states: states,
      zip: zip,
      day: day
    };
    return axios.post('http://localhost:5000/api/auth/register', userData)
  }

  handleLogin = (username, password) => {
    // console.log(username);
    // console.log(password);
    console.log('Username and Password submitted.');
    const userData = {
      username: username,
      password: password,
    };
<<<<<<< HEAD
    axios.post('http://seed-times.herokuapp.com/api/auth/register', userData)
      .then(res => console.log(res.data));
=======
    return axios.post('http://localhost:5000/api/auth/login', userData)
>>>>>>> 921077b81ce8affdd6dd73ecae0628e9d32bb5db
  }

  handleAddProduce = (name, price, farm, description, season) => {
    console.log('Item name, price, and farm submitted.');
    const itemData = {
      name: name,
      price: price,
      farm: farm,
      description: description,
      season: season
    };
<<<<<<< HEAD
    axios.post('http://seed-times.herokuapp.com/api/veggie', itemData)
      .then(res => console.log(res.data))
  }
=======
    axios.post('http://localhost:5000/api/veggie', itemData)
      .then(res => console.log(res.data));
  };
>>>>>>> 921077b81ce8affdd6dd73ecae0628e9d32bb5db

  render(){

    return (
      <BrowserRouter>
        <div>
          <Header onSearch={this.onSearch}/>
          <Switch>
            <Route exact path="/produce" render={(routeProps) => ( <Produce {...routeProps} 
                currentId={this.state.currentId}
                veggies = {this.state.veggies}/>)} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cart" render={(routeProps) => ( <Cart {...routeProps} currentId={this.state.currentId} />)} />
            <Route exact path="/register" render={(routeProps) => ( <Register {...routeProps} updateId={this.updateId.bind(this)} handleRegister={this.handleRegister} />)} />
			<Route exact path="/signin" render={(routeProps) => ( <Login {...routeProps} updateId={this.updateId.bind(this)} handleLogin={this.handleLogin} />)} />
            <Route exact path="/add_produce" render={(routeProps) => (<AddProduce {...routeProps} handleAddProduce={this.handleAddProduce} />)}/>
            <Route exact path="/">
              <Redirect to="/produce" />
            </Route>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )

  }
}

export default App;