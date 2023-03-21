import React from "react";
import { Link } from 'react-router-dom'

export default function Header () {
    return(
        <header>
            <nav className="header">
                <div className="header__main">
                    <Link className='Link' to='/' >#VANLIFE</Link>
                </div>
                <div className="header__sub">
                    <Link className="Link" to='/host'>Host</Link>
                    <Link className='Link' to='/about'>About</Link>
                    <Link className='Link' to='/vans'>Vans</Link>
                </div>
            </nav>
        </header>
        
    )
        
    
}