import React from 'react'
import './buildControl.css'

const BuildControl = ({label, added, remove, disabled}) => (
    <div className="BuildControl">
        <div className="Label">{label}</div>
        <button className="Less" disabled={disabled}
        onClick={remove}>
            Less
        </button>
        <button className="More"
         onClick={added}>
             More
        </button>
    </div>
);

export default BuildControl;