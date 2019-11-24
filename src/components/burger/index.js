import React from 'react'
import './burger.css'
import BurgerIngredient from './burgerIngredient'

const Burger = ({ingredients}) => {
     
    let transformIngredients = [];
    for(let ing in ingredients){
        for(let i = 0; i !== ingredients[ing]; ++i){
            transformIngredients.push(<BurgerIngredient key={ing+i} type={ing}/>)
        }
    }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {
                transformIngredients.length === 0 ? 
                <p>Plese adding ingredients</p> : transformIngredients
            }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;