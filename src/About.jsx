import React from "react";
import picURL from './assets/image_54_2x.png'
import { Link } from 'react-router-dom'
export default function About ( ){
    return(
        <div className="about">
            <div className="about__container">
                <img src={picURL} alt="Man on Van" className="about__pic" />
            </div>
            <div className="about__desc">
                <h2 className="about__desc--heading">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h2>
                <p className="about__desc--content">
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                </p>
                <p className="about__desc--content">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="about__desc--card">
                    <div className="about__desc--head">
                        <h2 >Your van is ready.</h2>
                        <h2 >Your destination is waiting.</h2>
                    </div>

                    <Link to='/vans' className="about__desc--btn">Explore our vans</Link>
                </div>
             </div>
        </div>
    )
}