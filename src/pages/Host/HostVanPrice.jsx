import React from "react";
import { useOutletContext } from "react-router";


export default function HostVanPrice(){
    const { van } = useOutletContext()
    return(
        <h1 className="price">
            ${ van.price }<span>/day</span>
        </h1>
    )
}