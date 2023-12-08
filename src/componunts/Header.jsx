import React, { Fragment } from 'react'

function Header() {
    return (
        <Fragment>
                <header className='header-item'>
                    <h1><span>X</span>CAR</h1>
                    <ul>
                        <li><a href="#"></a>New</li>
                        <li><a href="#"></a>Used</li>
                        <li><a href="#"></a>Electric</li>
                        <li><a href="#"></a>Reserch</li>
                        <li><a href="#"></a>Sell Your Car</li>
                    </ul>
                    <div className='header-button'>
                        <button className='Signup-btn'>Sign Up</button>
                        <button className='Signin-btn'>Sign In</button>
                    </div>
                </header>
        </Fragment>
    )
}

export default Header;