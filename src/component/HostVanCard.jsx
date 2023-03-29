import React from "react";


export default function HostVanCard ( props ){
    const { van } = props
    return(
        <div className="cards">
            <div className="card">
                <div className="card__display">
                    <img src={van.imageUrl} alt="Van pics" className="card__display-img" />
                    <div className="card__display-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
                <p className="card__edit">Edit</p>
            </div>
        </div>
    )
}