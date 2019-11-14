import React, {Component} from 'react'
import CheckoutSummary from '../../../components/order/checkoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './contactData'

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, price: price})
    }

    onCheckoutCancel = () => {
        this.props.history.goBack();
    }

    onCheckoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        const {ingredients, price} = this.state;
        return(
            <div>
                <CheckoutSummary 
                ingredients={ingredients}
                onCheckoutCancel={this.onCheckoutCancel}
                onCheckoutContinue={this.onCheckoutContinue}
                />
                <Route path={this.props.match.path + '/contact-data'}
                 render={(props) => (<ContactData ingredients={ingredients} price={price} {...props}/>)}/>
            </div>
        );
    }
}

export default Checkout;