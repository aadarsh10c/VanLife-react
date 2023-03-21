import React from "react";
import { Link, useParams } from 'react-router-dom'

export default function VanDetail(){
    const { id } = useParams()
    const [ van , setVan ] = React.useState( null )

    React.useEffect( () => {
        fetch(`/api/vans/${id}`)
        .then( res => res.json() )
        .then( data => setVan( data.vans ))
    } ,[ id ])

    return(
        <div className="van__container">
		    { van ? ( 
                <div className="van__detail">
                    <div className="van__link">
                        <Link to='/vans'>Back to all vans</Link>      
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