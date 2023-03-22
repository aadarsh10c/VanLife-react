import React from "react";

import HostHeader from "../component/HostHeader";

import { Outlet } from 'react-router-dom'

import { HostVanProvider } from "../provider/HostVanContext";

export default function HostLayout ( ){
    return(
        <HostVanProvider>
            <HostHeader />
            <Outlet />
        </HostVanProvider>
    )
    
}