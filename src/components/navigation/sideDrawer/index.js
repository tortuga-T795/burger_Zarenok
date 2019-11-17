import React from 'react'
import Logo from '../../logo'
import NavigationItems from '../navigationItems'
import BackDrop from '../../UI/backDrop'

import './sideDrawer.css'

const SideDrawer = ({open, close}) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(open){
        attachedClasses = ["SideDrawer", "Open"]
    }
    return(
        <>
            <BackDrop show={open} clicked={close}/>
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav> 
            </div>
        </>
    );
};

export default SideDrawer;