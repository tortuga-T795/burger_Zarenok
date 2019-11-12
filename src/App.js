import React from 'react';
import './App.css';
import Layout from './components/myLayout'
import BurgerBuilder from './containers/burgerBuilder'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
