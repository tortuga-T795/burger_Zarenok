import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_START, PURCHASE_INIT, SET_ORDERS_START, SET_ORDERS_SUCCESS, SET_INGREDIENTS_FAILED, SET_ORDERS_FAIL } from '../constants'
import {updateObject} from '../util'

const initialState = {
    orders: [],
    loading: false,
    purshased: false
};

const OrderReducer = (state = initialState, action) => {
    switch(action.type){
        case PURCHASE_INIT:
            return updateObject(state, {purshased: false})
        case PURCHASE_BURGER_START:
            return updateObject(state,{loading: true})
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.value.orderData,
                id: action.value.id
            }
            return updateObject(state, {
                purshased: true,
                loading: false,
                orders: state.orders.concat(newOrder)
            }) 
        case PURCHASE_BURGER_FAIL:
            return updateObject(state, {loading: false})              
        case SET_ORDERS_START: 
            return updateObject(state, {loading: true})
        case SET_ORDERS_SUCCESS:
            return updateObject(state, {
                orders: action.value,
                loading: false
            })
        case SET_ORDERS_FAIL:
            return updateObject(state, {loading: false})
        default:
            return state;
    }
}

export default OrderReducer;