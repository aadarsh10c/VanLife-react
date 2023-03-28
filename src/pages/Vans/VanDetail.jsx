import React from "react";
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import getVansData from '../../hooks/getVansData'
import useFetchData from "../../hooks/useFetchData";
import DataNotFound from "../DataNotFound";

export function loader({ params }){
    const { id } =  params 
    return getVansData('/api/vans',id)
}

export default function VanDetail(){
    const { id } = useParams()

    const van = useLoaderData()

    console.log( van )
    
    let location = useLocation()
    
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