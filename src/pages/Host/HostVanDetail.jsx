import React from "react";
import { useOutletContext } from "react-router";

export default function HostVanDetail(){
    const { van } = useOutletContext()
    return(
        <div className='description'>
            <h3>Name: <span>{van.name}</span></h3>
            <h3>Category: <span>{van.type}</span></h3>
            <h3>Description: <span>{van.description}</span></h3>
            <h3>Visibilty: <span>Public</span></h3>
        </div>
    )
}