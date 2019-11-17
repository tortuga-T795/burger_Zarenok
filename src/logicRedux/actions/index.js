import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT, 
    SET_INGREDIENTS, 
    PURCHASE_BURGER_SUCCESS, 
    PURCHASE_BURGER_FAIL, 
    PURCHASE_BURGER_START, 
    PURCHASE_INIT, 
    SET_ORDERS_SUCCESS, 
    SET_ORDERS_FAIL, 
    SET_ORDERS_START
} from '../constants'
import axios from '../../axios--orders'


export const addIngredient = igName => ({
    type: ADD_INGREDIENT, value: igName
})

export const removeIngredient = igName => ({
    type: REMOVE_INGREDIENT, value: igName
})

export const setIngredients = (ingredients) => ({
    type: SET_INGREDIENTS, 
    value: ingredients
})

export const setIngredientsFailed = () =>({
    type: setIngredientsFailed
})

export const getIngredients = () =>  dispatch => {
    axios.get('https://burger-75a81.firebaseio.com/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            dispatch(setIngredientsFailed())
        })
}
///////////////////////////////////////

export const purchaseBurgerSuccess = (id, orderData) => ({
    type: PURCHASE_BURGER_SUCCESS, value: {id, orderData}
})

export const purchaseBurgerFail = error => ({
    type: PURCHASE_BURGER_FAIL, value: error
})

export const purchaseBurgerStart = () => ({
    type: PURCHASE_BURGER_START
})

export const purchaseBurger = (orderData) => async dispatch => {
    dispatch(purchaseBurgerStart());
    await axios.post('/orders.json', orderData)
        .then(response => {
          dispatch(purchaseBurgerSuccess(response.data, orderData))  
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        })
}

export const purchaseInit = () => ({
    type: PURCHASE_INIT
})

export const setOrdersSuccess = (orders) => ({
    type: SET_ORDERS_SUCCESS, value: orders
})

export const setOrdersFail = (error) => ({
    type: SET_ORDERS_FAIL, value: error
})

export const setOrdersStart = () => ({
    type: SET_ORDERS_START
})

export const setOrders = () => async dispatch => {
    dispatch(setOrdersStart());
    await axios.get('/orders.json')
        .then(response => {
            const orders = [];
            for(let key in response.data){
                orders.push({
                    ...response.data[key],
                id: key
            });
            }
            dispatch(setOrdersSuccess(orders))
        })
        .catch(err => {
            dispatch(setOrdersFail())
        })
}
