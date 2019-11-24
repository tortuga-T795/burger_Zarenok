import React from 'react'
import Logo from '../../logo'
import NavigationItems from '../navigationItems'
import BackDrop from '../../UI/backDrop'

import classes from './sideDrawer.module.css'

const SideDrawer = ({open, close}) => {
    let attachedClasses = [classes.SideDrawer]
    if(open){
        attachedClasses.push(classes.Open);
    }
    else{
        attachedClasses.push(classes.Close)
    }
    return(
        <>
            <BackDrop show={open} clicked={close}/>
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%"/>
                <NavigationItems/>
            </div>
        </>
    );
};

export default SideDrawer;