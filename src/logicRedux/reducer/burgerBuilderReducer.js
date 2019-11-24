import {} from '../actions'
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, SET_INGREDIENTS_FAILED } from '../constants';
import { updateObject } from '../util';


const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.5
}

const BurgerBuilderReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_INGREDIENT:{
            let newState = {...state};
            newState.ingredients[action.value] += 1;
            newState.totalPrice += INGREDIENT_PRICES[action.value]
            return newState; 
        }
        case REMOVE_INGREDIENT: {
            const updatedIngredient = {[action.value]: state.ingredients[action.value] - 1};
            const updatedIngrs = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngrs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.value]
            }
        return updateObject(state,updatedState);
        }
        case SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.value,
                totalPrice: initialState.totalPrice,
                error: false
            })
        case SET_INGREDIENTS_FAILED:
            return updateObject(state, {error: true})        
        default: 
            return state;
    }
}

export default BurgerBuilderReducer;

