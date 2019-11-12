import React from 'react'
import './myToolbar.css'
import Logo from '../../logo'
import NavigationItems from '../navigationItems'
import DrawerToggle from '../sideDrawer/DrawerToggle'

const Toolbar = ({open}) => (
    <header className="Toolbar">
        <DrawerToggle clicked={open}/>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;