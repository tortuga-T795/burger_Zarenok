import React, {Component} from 'react';

import Aux from '../../hoc/aux_';
import Burger from '../../components/burger';
import Modal from '../../components/UI/modal';
import BuildControls from '../../components/burger/buildControls'
import OrderSummmary from '../../components/burger/oder'

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
        purchase: false,
        purchasing: false
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

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancel = () => {
        this.setState({purchasing: false});
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

    purchaseContinue = () => {
        alert('-- Ok! And now pay -- :)')
    }

    render() {
        const {ingredients, totalPrice, purchase, purchasing} = this.state;
        const disableInfo = {
            ...ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={purchasing} modalClosed={this.purchaseCancel}>
                    <OrderSummmary 
                        ingredients={ingredients}
                        cancel={this.purchaseCancel}
                        continuePay={this.purchaseContinue}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 price={totalPrice}
                 addIngredient={this.addIngredient}
                 removeIngredient={this.removeIngredient} 
                 purchase={purchase}
                 disabled={disableInfo}
                 purchaseHandler={this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;