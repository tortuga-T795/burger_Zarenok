import React, {Component} from 'react';

import Aux from '../../hoc/aux_';
import Burger from '../../components/burger';
import Modal from '../../components/UI/modal';
import BuildControls from '../../components/burger/buildControls'
import OrderSummmary from '../../components/burger/oder'
import axios from '../../axios--orders'
import Spinner from '../../components/UI/spinner'
import WithError from '../../hoc/withError'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 2,
        purchase: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('https://burger-75a81.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: true})
        })
    }

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
        .map(key =>  ingredients[key])
        .reduce((sum, el) => sum + el,0);
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
        const {ingredients, price} = this.state;
        let query = [];
        for(let i in ingredients){
            query.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
        }
        query.push('price='+price);
        query = query.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + query
        });
    }

    render() {
        const {ingredients, totalPrice, purchase, purchasing, loading, error} = this.state;
        let burger = error ? <p>U bitch</p> : <Spinner/>;
        let orderSummary = null;
        const disableInfo = {
            ...ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        if(ingredients){
            burger = <Aux><Burger ingredients={this.state.ingredients}/>
            <BuildControls
            price={totalPrice}
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient} 
            purchase={purchase}
            disabled={disableInfo}
            purchaseHandler={this.purchaseHandler}/></Aux>
            orderSummary = <OrderSummmary 
            ingredients={ingredients}
            cancel={this.purchaseCancel}
            continuePay={this.purchaseContinue}
            price={totalPrice}/>
        }
    
        return (
            <Aux>
                <Modal show={purchasing} modalClosed={this.purchaseCancel}>
                    {loading ? <Spinner/> : orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default WithError(BurgerBuilder, axios);