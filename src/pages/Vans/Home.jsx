import React from "react";
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className="home">
            <h1 className="home__head">
            You got the travel plans, we got the travel vans.
            </h1>
            <h3 className="home__description">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </h3>
            <Link to='/vans' className="home__btn">
            Find your van
            </Link>
        </div>
    )
}