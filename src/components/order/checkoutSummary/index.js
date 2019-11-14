import React from 'react'
import Burger from '../../burger'
import Button from '../../UI/myButton'
import './checkoutSummary.css'

const CheckoutSummary = ({ingredients, onCheckoutCancel, onCheckoutContinue}) => {
    return(
        <div className="CheckoutSummary">
            <h1>We hope u cant eat</h1>
            <div style={{width: '300px', margin: 'auto'}}>
                <Burger ingredients={ingredients}/>
            </div>
            <Button 
            btnType="Danger"
            clicked={onCheckoutCancel}
            >Cancel</Button>
            <Button 
            btnType="Success"
            clicked={onCheckoutContinue}
            >Continue</Button>
        </div>
    );
};

export default CheckoutSummary;