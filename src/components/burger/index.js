import React from 'react'
import './burger.css'
import BurgerIngredient from './burgerIngredient'

const Burger = ({ingredients}) => {
    let transformIngredients = Object.keys(ingredients)
    .map(key => {
        return [...Array(ingredients[key])]
        .map((_, index) => {
            return <BurgerIngredient key={key + index} type={key}/>
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, [])

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