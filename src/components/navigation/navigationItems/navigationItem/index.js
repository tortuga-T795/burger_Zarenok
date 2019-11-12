import React from 'react'
import './navigationIten.css'

const NavigationItem = ({children, link, active}) => (
    <li className='NavigationItem'>
        <a href={link} 
            className={active ? 'active' : null}
        >
            {children}
        </a>
    </li>
);

export default NavigationItem;