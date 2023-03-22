import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";


export default function Vans ( ){

    const vans = useFetchData( '/api/vans' )
    // useEffect(()=>{
    //     fetch('/api/vans')
    //     .then( response => response.json())
    //     .then( data => setVans( data.vans ) )
    // },[])

    function addTypeLinks ( typeArray  ){
        let typeList = typeArray.map( (val, index) => {
            return(
                <button key={index} className="vans__filter--btn" >{val}</button>
            )
        })
        return typeList
    }

    const typeSet = new Set()
    vans.forEach( item => {
        typeSet.add( item.type ) 
    })
    const  typeArray = [ ...typeSet ]
    const typeLinks =  addTypeLinks ( typeArray  ) 
    
    


    const tileList = vans.map( item => (
        
            <div key={item.id} className="vans__tile">
                <Link to={`${item.id}`}>
                    <img src={item.imageUrl}  className="vans__tile--img" />                      
                    <div className="vans__tile__info">
                        <h2>{item.name}</h2>
                        <div className="vans__tile__info--price">
                            <h2>${item.price}</h2>
                            <p>/day</p>
                        </div>
                    </div>
                    <a href="#" className="vans__tile__btn">{item.type}</a>
                </Link>
            </div>
        
    ))  

    return(
        <div className="vans">
            <h1 className="vans__head">Explore our van options</h1>
            <div className="vans__filter">
                    {typeLinks}
                <a href="#" className="vans__filter--clear">Clear Filter</a>
            </div>
            <div className="vans__tiles">
                {tileList}
            </div>
        </div>
    )
}