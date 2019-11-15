import React from 'react'
import './order.css'

const Order = ({ingredients, price}) => {
    const ingr = [];
    for(let key in ingredients){
        ingr.push({
            name: key,
            amount: ingredients[key]
        })
    }

   return( 
   <div className="Order">
        <p>ingredients: {ingr.map(el => {
        return <span
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px' 
                }} 
                key={el.name}>{el.name} {el.amount}</span>
        })
        }
        </p>
        <p>Price: <strong>{Number.parseFloat(price).toFixed(2)}</strong></p>
    </div>
   );
};

export default Order;