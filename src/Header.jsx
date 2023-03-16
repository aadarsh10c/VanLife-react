import React from "react";
import { Link } from 'react-router-dom'

export default function Header () {
    return(
        <header>
            <nav className="header">
                <div className="header__main">
                    <h1>#VANLIFE</h1>
                </div>
                <div className="header__sub">
                    <h3>About</h3>
                    <h3>Vans</h3>
                </div>
            </nav>
        </header>
        
    )
        
    
}