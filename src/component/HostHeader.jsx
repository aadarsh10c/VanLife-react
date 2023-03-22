import React from "react";
import { NavLink } from 'react-router-dom'

export default function HostHeader () {
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
                <div className="header__sub">
                    <NavLink className="Link" style={({isActive}) => setActive( isActive )} to='/host' end >Dashboard</NavLink>
                    <NavLink className='Link' style={({isActive}) => setActive( isActive )} to='/host/income'>Income</NavLink>
                    <NavLink className='Link' style={({isActive}) => setActive( isActive )} to='/host/vans'>Vans</NavLink>
                    <NavLink className='Link' style={({isActive}) => setActive( isActive )} to='/host/reviews'>Reviews</NavLink>
                </div>
            </nav>
        </header>
        
    )
        
    
}