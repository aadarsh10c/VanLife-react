import React from "react";
import { NavLink , Link } from 'react-router-dom'
import userlogo from '../assets/user_icon.png'

export default function Header () {
    
    const activeStyle={
        borderBottom: '3px solid black',
        fontWeight: 'bold',
        color: 'black'
    }
    const setActive = ( isActive ) => {
        return isActive ? activeStyle : null
    }
    return(
        <header>
            <nav className="header">
                <div className="header__main">
                    <Link  to='.' >#VANLIFE</Link>
                </div>
                <div className="header__sub">
                    <NavLink className="Link" style={({isActive}) => setActive( isActive )} to='host'>Host</NavLink>
                    <NavLink className="Link" style={({isActive}) => setActive( isActive )} to='about'>About</NavLink>
                    <NavLink className="Link" style={({isActive}) => setActive( isActive )} to='vans'>Vans</NavLink>
                    <Link className="user" to='login'>
                        <img src={userlogo} className="user__img" />
                    </Link>
                </div>
            </nav>
        </header>
        
    )
        
    
}