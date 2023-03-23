import React, { useEffect , useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";


export default function Vans ( ){

    const vans = useFetchData( '/api/vans' )

    const [ searchParams , setSearchParams ] = useSearchParams() 
    
    let typeFilter = searchParams.get('type')


    const handleFilterChange = ( key , value ) => {
        setSearchParams( prevParams => {
            if ( value === null ){
                prevParams.delete( key )
            }else {
                prevParams.set( key , value )
            }
            return prevParams
        })
    } 

    function addTypeLinks ( typeArray  ){
        let typeList = typeArray.map( (val, index) => {
            return(
                <button key={index} 
                        className="vans__filter--btn" 
                        onClick={ () =>  handleFilterChange( 'type' , val ) }
                        >{val}</button>
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
    
    const filteredVans = typeFilter ? vans.filter( van => van.type === typeFilter ) : vans


    const tileList = filteredVans.map( item => (
        
            <div key={item.id} className="vans__tile">
                <Link to={`${item.id}`}  state={ { linkQuery: searchParams.toString(), query: typeFilter }}>
                    <img src={item.imageUrl}  className="vans__tile--img" />                      
                    <div className="vans__tile__info">
                        <h2>{item.name}</h2>
                        <div className="vans__tile__info--price">
                            <h2>${item.price}</h2>
                            <p>/day</p>
                        </div>
                    </div>
                    <button href="#" className="vans__tile__btn">{item.type}</button>
                </Link>
            </div>
        
    ))  

    return(
        <div className="vans">
            <h1 className="vans__head">Explore our van options</h1>
            <div className="vans__filter">
                    {typeLinks}
                { typeFilter && (<button  
                onClick={ () => handleFilterChange( 'type' , null ) } 
                className="vans__filter--clear">Clear Filter</button>)}
            </div>
            <div className="vans__tiles">
                {tileList}
            </div>
        </div>
    )
}