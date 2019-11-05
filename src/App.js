import React from 'react';
import './App.css';
import Layout from './components/Layout'
import BurgerBuilder from './containers/burgerBuilder'


function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
