import React from "react";
import { useOutletContext } from "react-router";


export default function HostVanImage(){
    const { van } = useOutletContext()
    return(
        <img src={van.imageUrl} alt="Van Pic" className="image" />
    )
}