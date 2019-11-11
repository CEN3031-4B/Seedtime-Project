import React from 'react';
import { Route, Switch, Redirect, BrowserRouter  } from 'react-router-dom';
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Cart from './views/Cart/Cart'
import Produce from './views/Produce/Produce'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items : [
        {name: "apple", price: 7},
        {name: "orange", price: 3},
        {name: "banana", price: 1}
      ]
    }
  }

  render(){

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/produce" component={Produce} />
            <Route exact path="/cart" /*component={Cart}*/ render={(routeProps) => ( <Cart {...routeProps} items={this.state.items}/> )} />
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
