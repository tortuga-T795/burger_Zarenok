import React, { Component } from 'react'
import classes from './burgerIndgridient.module.css'
import PropsTypes from 'prop-types';

class BurgerIngridient extends Component {

    render() {
        let ingredient = null;
        switch(this.props.type){
            case 'meat':
                ingredient = <div className={classes.Meat}/>
                break;
            case 'cheese':
                ingredient = <div className={classes.Cheese}/>
                break;
            case 'salad':
                ingredient = <div className={classes.Salad}/>
                break;
            case 'bacon':
                ingredient = <div className={classes.Bacon}/>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngridient.PropsTypes = {
    type: PropsTypes.string.isRequired
}
   

export default BurgerIngridient;