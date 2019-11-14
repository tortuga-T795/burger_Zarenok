import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Layout from './components/myLayout'
import BurgerBuilder from './containers/burgerBuilder'
import Checkout from './containers/burgerBuilder/checkout'

function App() {
  return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder}/> 
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
