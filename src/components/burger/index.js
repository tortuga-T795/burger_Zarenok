import React from 'react'
import classes from './burger.module.css'
import {BurgerIngredient, StandardBread} from './burgerIngredient'

const Burger = ({ingredients}) => {
     
    let transformIngredients = [];
    for(let ing in ingredients){
        for(let i = 0; i !== ingredients[ing]; ++i){
            transformIngredients.push(<BurgerIngredient key={ing+i} type={ing}/>)
        }
    }
    return(
        <div className={classes.Burger}>
            <StandardBread>
            {
                transformIngredients.length === 0 ? 
                <p>Plese adding ingredients</p> : transformIngredients
            }
            </StandardBread>
        </div>
    );
};

export default Burger;