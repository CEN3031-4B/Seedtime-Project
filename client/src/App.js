import React from 'react';
import { Route, Switch, Redirect, BrowserRouter  } from 'react-router-dom';
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Cart from './views/Cart/Cart'
import Produce from './views/Produce/Produce'
import Register from './views/Register/Register'
import AddProduce from './views/AddProduce/AddProduce'
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        veggies: []
    }
  }

  handleRegister = (username, password, confirm_pass) => {
    // console.log(username);
    // console.log(password);
    console.log('Username and Password submitted.');
    const userData = {
      username: username,
      password: password,
      confirm_pass: confirm_pass
    };
    axios.post('http://seed-times.herokuapp.com/api/auth/register', userData)
      .then(res => console.log(res.data));
  }

  handleAddProduce = (name, price, farm) => {
    console.log('Item name, price, and farm submitted.');
    const itemData = {
      name: name,
      price: price,
      farm: farm
    };
    axios.post('http://seed-times.herokuapp.com/api/veggie', itemData)
      .then(res => console.log(res.data))
  }

  render(){

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/produce" render={(routeProps) => ( <Produce {...routeProps} />)} />
            <Route exact path="/cart" render={(routeProps) => ( <Cart {...routeProps}/> )} />
            <Route exact path="/register" render={(routeProps) => ( <Register {...routeProps} handleRegister={this.handleRegister} />)} />
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
