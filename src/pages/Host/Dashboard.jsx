import React from "react";
import { Link, useOutletContext } from 'react-router-dom'

import starURL from '../../assets/Star_3.png'

//context
//import { useHostVanData } from "../../provider/HostVanContext";

import HostVanCard from "../../component/HostVanCard";

export default function Dashboard(){
    const  hostVanData  = useOutletContext()
    const hostVanList = hostVanData.map( van => (
            <Link to={`/host/vans/${van.id}`} key={van.id} className='vandetail-Link'>
                <HostVanCard van={van} />
            </Link>
    ))
    return(
        <div className="dashboard">
            <div className="profile">
                <h1 className="profile__head">
                    Welcome!
                </h1>
                <div className="profile__details">
                    <p className="profile__details-month">
                        Income last <span>30days</span>
                    </p>
                    <h4 className="profile__details-detail">
                        Details
                    </h4>
                </div>
                <h1 className="profile__price">
                    $2,260
                </h1>
            </div>
            <div className="review">
                <div className="review__score">
                    <h3 className="review__score-head">
                        Review Score
                    </h3>
                    <div className="review__score-rating">
                        <img src={starURL} alt="star" />
                        <p><span>5.0</span>/5</p>
                    </div>
                </div>
                <h4 className="review__detail">
                    Details
                </h4>
            </div>
            <div className="vanlist">
                <div className="head">
                    <h3 className="head__1">Your listed vans</h3>
                    <p className="head__2">View all</p>
                </div>
                { hostVanData.length > 0 ? hostVanList
                : <h3>Loading ...</h3>}
            </div>
        </div>
    )
}