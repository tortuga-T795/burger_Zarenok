import React, {Component} from 'react'
import BackDrop from '../backDrop'

import './modal.css'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render() {
        const {children, show, modalClosed} = this.props;
        const temp1 = show ? (<div className={show ? "Modal Open" : "Modal Close"}>
            {children}
        </div>) : null;
        return(
            <>
                <BackDrop show={show} clicked={modalClosed}/>
                {temp1}
            </>
        );
    }
};

export default Modal;