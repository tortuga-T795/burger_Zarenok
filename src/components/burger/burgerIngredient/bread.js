import React from 'react'
import classes from '../burgerIngredient/burgerIndgridient.module.css'

const BreadTop = () => (
    <div className={classes.BreadTop}>
        <div className={classes.Seeds1}/>
        <div className={classes.Seeds2}/>
    </div>
)

const BreadBottom = () => (
    <div className={classes.BreadBottom}/>
)

const StandardBread = ({children}) => {
    return (
        <>
            <BreadTop/>
            {children}
            <BreadBottom/>
        </>
    )
}

export default StandardBread;