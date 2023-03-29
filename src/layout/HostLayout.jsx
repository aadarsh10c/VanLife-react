import React from "react";

import HostHeader from "../component/HostHeader";

import { Outlet , useLoaderData } from 'react-router-dom'

import getVansData from "../hooks/getVansData";

//import { HostVanProvider } from "../provider/HostVanContext";

export function loader () {
    return getVansData( 'api/host/vans' )
}
export default function HostLayout ( ){
    const vanData = useLoaderData()
    console.log( vanData )
    return(
        <>
            <HostHeader />
            <Outlet context={ vanData }/>
        </>
            
    )
    
}