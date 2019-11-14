import React from 'react'
import {NavLink} from 'react-router-dom'

import './navigationIten.css'

const NavigationItem = ({children, link, exact}) => (
    <li className='NavigationItem'>
        <NavLink
            to={link}
            exact={exact}
            activeClassName={"active"}>
            {children}
        </NavLink>
    </li>
);

export default NavigationItem;