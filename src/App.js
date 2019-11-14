import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Layout from './components/myLayout'
import BurgerBuilder from './containers/burgerBuilder'
import Checkout from './containers/burgerBuilder/checkout'
import Orders from './containers/burgerBuilder/orders'

function App() {
  return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder}/> 
            <Route path="/orders" component={Orders}/>
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
