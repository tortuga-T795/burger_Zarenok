import React from 'react'
import './drawerToggle.css'

const DrawerToggle = ({clicked}) => (
    <div className="DrawerToggle" onClick={clicked}>
         <div></div>
         <div></div>
         <div></div>
    </div>
);

export default DrawerToggle;