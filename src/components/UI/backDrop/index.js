import React from 'react'
import './backDrop.css'

const BackDrop = ({show, clicked}) => (
    show ? <div className="Backdrop" onClick={clicked}/> : null
);

export default BackDrop
