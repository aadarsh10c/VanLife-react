import React from "react";
import HostHeader from "../component/HostHeader";
import { Outlet } from 'react-router-dom'
export default function HostLayout ( ){
    return(
        <>
            <HostHeader />
            <Outlet />
        </>
    )
    
}