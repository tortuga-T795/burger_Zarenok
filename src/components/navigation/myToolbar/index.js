import React from 'react'
import classes from './myToolbar.module.css'
import Logo from '../../logo'
import NavigationItems from '../navigationItems'
import DrawerToggle from '../sideDrawer/DrawerToggle'

const DesktopOnly = ({children}) => (
    <span className={classes.DesktopOnly}>
        {children}
    </span>
)

const MobileOnly = ({children}) => (
    <div className={classes.MobileOnly}>
        {children}
    </div>
)

const Toolbar = ({open}) => (
    <header className={classes.Toolbar}>
        <MobileOnly>
            <DrawerToggle clicked={open}/>
        </MobileOnly>
        <Logo height="80%"/>
        <DesktopOnly>
            <nav>
                <NavigationItems/>
            </nav>
        </DesktopOnly>
    </header>
);

export default Toolbar;