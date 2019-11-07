import React from 'react'
import './buildControls.css'
import BuildControl from './buildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const BuildControls = ({price, addIngredient, removeIngredient, purchase, disabled, purchaseHandler}) => (
    <div className="BuildControls">
        <p>Price of Burger: <strong>{price.toFixed(2)}</strong></p>
        {controls.map(el => <BuildControl 
        key={el.label}
         label={el.label}
         added={() => addIngredient(el.type)}
         remove={() => removeIngredient(el.type)}
         disabled={disabled[el.type]}
         />)
        }
        <button 
        className="OrderButton"
        disabled={!purchase}
        onClick={purchaseHandler}>Order now</button>
    </div>
);

export default BuildControls;
