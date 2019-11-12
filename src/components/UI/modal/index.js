import React, {Component} from 'react'
import BackDrop from '../backDrop'
import Aux from '../../../hoc/aux_'

import './modal.css'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
            return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render() {
        const {children, show, modalClosed} = this.props;
        return(
            <Aux>
                <BackDrop show={show} clicked={modalClosed}/>
                <div 
                className="Modal"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0' 
                }}>
                    {children}
                </div>
            </Aux>
        );
    }
};

export default Modal;