import React from 'react'
import Aux from '../../hoc/aux_'

import './layout.css'

const Layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer, BackDrop</div>
        <main className={"Content"}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;
