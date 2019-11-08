import React from 'react'
import './myToolbar.css'
import Logo from '../../logo'

const Toolbar = (props) => (
    <header className='Toolbar'>
        <div>Menu</div>
        <Logo/>
        <nav className='nav'>
            <ul></ul>
        </nav>
    </header>
);

export default Toolbar;