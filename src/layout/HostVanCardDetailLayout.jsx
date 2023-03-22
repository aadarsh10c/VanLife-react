import React from "react";
import { NavLink, Link, useParams , Outlet} from 'react-router-dom'

import { useHostVanData } from "../provider/HostVanContext";


export  default function HostVanCardDetailLayput(){
    const { id } = useParams()

    const vans = useHostVanData(  )

    const van = vans.filter( item => item.id == id )[0]

    const activeStyle = {
        borderBottom: '3px solid black',
        fontWeight: 'bold',
        color: 'black'
    }
    const setStyle = ( isActive ) => isActive ? activeStyle : null 

    return( 
        <div className="hostVanDetail">
            <Link relative='path' to='..'> ← Back to all vans</Link>
            { van ? (
                    <div className="vandetail">
                        <div className="display">
                            <img src={van.imageUrl} alt="Van Pic" className="display__img" />
                            <div className="display__info">
                                <button className="display__info-btn">{van.type}</button>
                                <h1 className="display__info-name">{van.name}</h1>
                                <p className="display__info-price"><span>${van.price}</span>/day</p>
                            </div>
                        </div>
                        <div className="detail__link">
                            <NavLink className="Link" style={ ({ isActive }) => setStyle( isActive ) } end to={`.`}>Details</NavLink>
                            <NavLink className="Link" style={ ({ isActive }) => setStyle( isActive ) } to={`price`}>Pricing</NavLink>
                            <NavLink className="Link" style={ ({ isActive }) => setStyle( isActive ) } to={`image`}>Photos</NavLink>
                        </div>
                        <Outlet />
                        
                    </div>
                    ) : <h1>Loading...</h1>}

        </div>
    )
}