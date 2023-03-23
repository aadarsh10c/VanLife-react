import React from "react";
import { Link } from 'react-router-dom'


export default function PageNotFound(){
    return(
        <div className="error">
            <h1 className="error__head">
            😢Sorry, the page you were looking for was not found.
            </h1>
            <Link className="error__link" to='/' >Return to Home</Link>
        </div>
    )
}