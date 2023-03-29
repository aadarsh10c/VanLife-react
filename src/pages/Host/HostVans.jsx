import React from "react";
import { Link , useOutletContext } from 'react-router-dom'

import HostVanCard from "../../component/HostVanCard";

//context
//import { useHostVanData } from "../../provider/HostVanContext";

export default function HostVans(){
    const hostVanData = useOutletContext()
    const hostVanList = hostVanData.map( van => (
            <Link to={`/host/vans/${van.id}`} key={van.id} className='vandetail-Link'>
                <HostVanCard van={van} />
            </Link>
    ))
    return(
        <div className="vanlist">
                <div className="head">
                    <h3 className="head__1">Your listed vans</h3>
                </div>
                { hostVanList }
        </div>
    )
}