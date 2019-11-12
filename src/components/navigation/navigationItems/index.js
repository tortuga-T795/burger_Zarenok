import React from 'react'
import './navigationItems.css'
import NavigationItem from './navigationItem'

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;