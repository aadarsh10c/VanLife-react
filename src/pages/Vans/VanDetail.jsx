import React from "react";
import { Link, useParams, useLocation } from 'react-router-dom'
import useFetchData from "../../hooks/useFetchData";
import DataNotFound from "../DataNotFound";

export default function VanDetail(){
    const { id } = useParams()

    const {data : van , loading , error }  = useFetchData( '/api/vans',id )

    console.log( van )
    
    if( error ){
        return(
            <DataNotFound error={ error } />
        )
    }
    
    let location = useLocation()
    console.log( location )
    
    let query = location.state?.linkQuery || ''
    let backLink = location.state?.query || 'all'

    return(
        <div className="van__container">
		    {  van  ? ( 
                <div className="van__detail">
                    <div className="van__link">
                        <Link relative='path' to={`..?${query}`}>← Back to {backLink} vans</Link>      
                    </div>
                    <div className="van__info">
                        <img src= {van.imageUrl} alt="" className="van__img" />
                        <button className="vans__filter--btn">{van.type}</button>
                        <h1 className="van__name">{van.name}</h1>
                        <h1 className="van__price">${van.price}/day</h1>
                        <p className="van__desc">{ van.description }</p>
                        <a href="#" className="van__rent">Rent this Van</a>
                    </div>
                </div>
				  
    ) : <h1>Loading ...</h1>}
    
</div> 
    )

}