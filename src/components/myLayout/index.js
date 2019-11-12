import React, {Component} from 'react'
import Aux from '../../hoc/aux_'
import ToolBar from '../navigation/myToolbar/index'
import SideDrawer from '../navigation/sideDrawer'

import './myLayout.css'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosed = () => {
        this.setState({
            showSideDrawer: false
        })
    };

    sideDrawerOpen = () => {
        this.setState((ps) => {
            return {showSideDrawer: !ps.showSideDrawer}
        })
    }

    render(){
        const {showSideDrawer} = this.state;
        return(
        <Aux>
            <ToolBar open={this.sideDrawerOpen}/>
            <SideDrawer 
            open={showSideDrawer} 
            close={this.sideDrawerClosed}/>
            <main className={"Content"}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
    
};

export default Layout;
