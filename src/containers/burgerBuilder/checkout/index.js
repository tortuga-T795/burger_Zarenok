import React, {Component} from 'react'
import CheckoutSummary from '../../../components/order/checkoutSummary'
import {Route, Redirect} from 'react-router-dom'
import ContactData from './contactData'
import {connect} from 'react-redux'


class Checkout extends Component {    
    onCheckoutCancel = () => {
        this.props.history.goBack();
    }

    onCheckoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        const {ings, purchased} = this.props;
        let summary = <Redirect to="/"/>
        const purchaseRedirect = purchased ? <Redirect to="/"/> : null;
        if(ings){
            summary = (
                <>
                    {purchaseRedirect}
                    <CheckoutSummary 
                    ingredients={ings}
                    onCheckoutCancel={this.onCheckoutCancel}
                    onCheckoutContinue={this.onCheckoutContinue}
                    />
                    <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}/>
                </>
            )
        }
        return summary;
    }
}

export default connect(
    state => ({
        ings: state.burger.ingredients,
        purchased: state.order.purchased
    })
)(Checkout);