import React from "react";
import { Link } from 'react-router-dom'

export default function HostHeader () {
    return(
        <header>
            <nav className="header">
                <div className="header__sub">
                    <Link className="Link" to='/host'>Dashboard</Link>
                    <Link className='Link' to='/host/income'>Income</Link>
                    <Link className='Link' to='/host/vans'>Vans</Link>
                    <Link className='Link' to='/host/reviews'>Reviews</Link>
                </div>
            </nav>
        </header>
        
    )
        
    
}