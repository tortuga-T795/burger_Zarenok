import React from 'react'
import image from './783076.png'
import './logo.css'

const Logo = ({height}) => (
    <div className="Logo" style={{height}}>
        <img src={image} alt="Timosha"/>
    </div>
);

export default Logo;