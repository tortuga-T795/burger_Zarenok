import React from 'react'
import classes from './buildControl.module.css'

const BuildControl = ({label, added, remove, disabled}) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.Less} disabled={disabled} onClick={remove}>
            Less
        </button>
        <button className={classes.More} onClick={added}>
             More
        </button>
    </div>
);

export default BuildControl;