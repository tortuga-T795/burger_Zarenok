import React from 'react'
import Aux from '../../../hoc/aux_'

const OrderSummary = ({ingredients}) => {
    const ingredientsSummary = Object.keys(ingredients)
    .map(key => {
        return (
        <li key={key}>
            <span 
            style={{textTransform: 'capitalize'}}>
                {key}
            </span>: {ingredients[key]}
        </li>
        )
    })
    return(
        <Aux>
            <h1>Your Order</h1>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default OrderSummary;
