import React, {Component} from 'react'
import CheckoutSummary from '../../../components/order/checkoutSummary'
import {Route, Redirect} from 'react-router-dom'
import ContactData from './contactData'
import {connect} from 'react-redux'
import { purchaseInit } from '../../../logicRedux/actions'

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
        if(ings){
            console.log(this.props)
            const purchaseRedirect = purchased ? <Redirect to="/"/> : null;
            summary = (
                <>
                    {purchaseRedirect}
                    <CheckoutSummary 
                    ingredients={ings}
                    onCheckoutCancel={this.onCheckoutCancel}
                    onCheckoutContinue={this.onCheckoutContinue}
                    />
                    <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}/>)}/>
                </>
            )
        }
        return summary;
    }
}

export default connect(
    state => ({
        ings: state.burger.ingredients,
    }),
)(Checkout);