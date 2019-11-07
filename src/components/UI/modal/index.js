import React from 'react'
import BackDrop from '../backDrop'
import Aux from '../../../hoc/aux_'

import './modal.css'

const Modal = ({children, show, modalClosed}) => (
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

export default Modal;