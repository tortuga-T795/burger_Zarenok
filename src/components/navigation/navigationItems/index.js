import React from 'react'
import './navigationItems.css'
import NavigationItem from './navigationItem'

const NavigationItems = () => (
    <nav>
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    </nav>
);

export default NavigationItems;