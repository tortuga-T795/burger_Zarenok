import React, {Component} from 'react';

import Aux from '../../hoc/aux_';
import Burger from '../../components/burger';
import BuildControls from '../../components/burger/buildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        purchase: false
    };

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
        .map(key => {
            return ingredients[key]
        })
        .reduce((sum, el) => {
            return sum + el;
        },0);
        this.setState({purchase: sum > 0})
    }

    addIngredient = (type) => {
        const {ingredients, totalPrice} = this.state;
        const updateIngredians = {...ingredients};
        updateIngredians[type] = ingredients[type] + 1;
        const newPrice = totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updateIngredians,
            totalPrice: newPrice
        })
        this.updatePurchase(updateIngredians);
    }

    removeIngredient = (type) => {

        const {ingredients, totalPrice} = this.state;
        if(ingredients[type] <= 0){
            return;
        }
        const updateIngredians = {...ingredients};
        updateIngredians[type] = ingredients[type] - 1;
        const newPrice = totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updateIngredians,
            totalPrice: newPrice
        })
        this.updatePurchase(updateIngredians);
    }

    render() {
        const {ingredients, totalPrice, purchase} = this.state;
        const disableInfo = {
            ...ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 price={totalPrice}
                 addIngredient={this.addIngredient}
                 removeIngredient={this.removeIngredient} 
                 purchase={purchase}
                 disabled={disableInfo}/>
                
            </Aux>
        )
    }
}

export default BurgerBuilder;