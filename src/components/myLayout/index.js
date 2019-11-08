import React from 'react'
import Aux from '../../hoc/aux_'
import ToolBar from '../navigation/myToolbar/index'


import './myLayout.css'

const Layout = (props) => (
    <Aux>
        <ToolBar/>
        <main className={"Content"}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;
