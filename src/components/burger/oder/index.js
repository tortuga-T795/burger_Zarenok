import React from 'react'
import Aux from '../../../hoc/aux_'
import Button from '../../../components/UI/myButton/myButton'

const OrderSummary = ({ingredients, cancel, continuePay}) => {
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
            <Button
                clicked={cancel} 
                btnType='Danger'>Cancel</Button>
            <Button 
                clicked={continuePay}
                btnType='Success'>Continue</Button>
        </Aux>
    );
};

export default OrderSummary;
