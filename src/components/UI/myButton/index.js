import React from 'react'
import './myButton.css'

const Button = ({children, clicked, btnType, disabled}) => (
    <button
        disabled={disabled}
        className={['Button', btnType].join(' ')}
        onClick={clicked}>{children}</button>
);

export default Button;