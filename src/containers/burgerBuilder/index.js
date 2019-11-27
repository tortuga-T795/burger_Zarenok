import React, {Component} from 'react';
import {connect} from 'react-redux'

import Burger from '../../components/burger';
import Modal from '../../components/UI/modal';
import axios from '../../axios--orders'
import BuildControls from '../../components/burger/buildControls'
import OrderSummmary from '../../components/burger/oder'
import Spinner from '../../components/UI/spinner'
import WithError from '../../hoc/withError'
import {addIngredient, removeIngredient, getIngredients, purchaseInit} from '../../logicRedux/actions'



class BurgerBuilder extends Component {
    state = {
        purchasing: false
    };

    componentDidMount() {
        this.props.onGetIngredients();
    }

    updatePurchase(ingredients) {
        let sum = 0;
        for(let ing in ingredients){
            sum += ingredients[ing];
        }
        return sum;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancel = () => {
        this.setState({purchasing: false});
    }

    purchaseContinue = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const {purchasing} = this.state;
        const {ings, price, error, addIngredient, removeIngredient} = this.props;
        let burger = error ? <p>U bitch</p> : <Spinner/>;
        let orderSummary = null;
        const disableInfo = {
            ...ings
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        if(ings){
            burger = (
            <>
            <Burger ingredients={ings}/>
            <BuildControls
            price={price}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient} 
            purchase={this.updatePurchase(ings)}
            disabled={disableInfo}
            purchaseHandler={this.purchaseHandler}/>
            </>)
            orderSummary = <OrderSummmary 
            ingredients={ings}
            cancel={this.purchaseCancel}
            continuePay={this.purchaseContinue}
            price={price}/>
        }
    
        return (
            <>
                <Modal show={purchasing} modalClosed={this.purchaseCancel}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        )
    }
}

export default connect(
    state => ({
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
        error: state.burger.error
    }),
    dispatch => dispatch => ({
        addIngredient: (ing) => dispatch(addIngredient(ing)),
        removeIngredient: (ing) => dispatch(removeIngredient(ing)),
        onGetIngredients: () => dispatch(getIngredients()),
        onInitPurchase: () => dispatch(purchaseInit())

    })
)(WithError(BurgerBuilder, axios));