import React, {Component} from 'react'
import ToolBar from '../navigation/myToolbar/index'
import SideDrawer from '../navigation/sideDrawer'

import classes from './myLayout.module.css'

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
        <>
            <ToolBar open={this.sideDrawerOpen}/>
            <SideDrawer 
                open={showSideDrawer} 
                close={this.sideDrawerClosed}
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </>
        );
    }
    
};

export default Layout;
