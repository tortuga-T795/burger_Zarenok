import {combineReducers } from 'redux'
import BurgerBuilderReducer from './burgerBuilderReducer'
import OrderReducer from './orderReducer'

const reducer = combineReducers({
    burger: BurgerBuilderReducer,
    order: OrderReducer
});

export default reducer;