import React from 'react'
import classes from './buildControls.module.css'
import BuildControl from './buildControl'
import {connect} from 'react-redux'

const OrderButton = ({purchase, purchaseHandler}) => (
    <button 
        className={classes.OrderButton}
        disabled={!purchase}
        onClick={purchaseHandler}>Order now
    </button>
)

const PriceLabel = ({price}) => (
    <p>Price of Burger: <strong>{price.toFixed(2)}</strong></p>
)

const BuildControls = ({price, addIngredient, removeIngredient, purchase, disabled, purchaseHandler, ingredients}) => {
    const controls = Object.keys(ingredients)
    .map(el => ({
        label: el[0].toUpperCase()+el.slice(1), key: el
    }));

    const buildControls = controls.map(el => 
        <BuildControl key={el.key}
            label={el.label}
            added={() => addIngredient(el.key)}
            remove={() => removeIngredient(el.key)}
            disabled={disabled[el.key]}
         />
        )

    return (<div className={classes.BuildControls}>
        <PriceLabel price={price}/>
        {buildControls}
        <OrderButton purchase={purchase} purchaseHandler={purchaseHandler}/>
    </div>)
};

export default connect(
    state => ({
        ingredients: state.burger.ingredients
    })
)(BuildControls);
