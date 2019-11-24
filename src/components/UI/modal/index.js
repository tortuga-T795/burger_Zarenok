import React, {Component} from 'react'
import BackDrop from '../backDrop'

import './modal.css'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render() {
        const {children, show, modalClosed} = this.props;
        const temp1 = (<div className="Modal">
            {children}
        </div>);
        const temp = show ? temp1 : null;
        return(
            <>
                <BackDrop show={show} clicked={modalClosed}/>
                {temp}
            </>
        );
    }
};

export default Modal;