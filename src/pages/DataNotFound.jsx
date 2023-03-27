import React from "react";
import { Link } from 'react-router-dom'


export default function DataNotFound( props ){
    return(
        <div className="error">
            <h1 className="error__head">
            😢Sorry, { props.message }.
            </h1>
            <Link className="error__link" to='/' >Return to Home</Link>
        </div>
    )
}