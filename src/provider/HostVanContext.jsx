import { createContext , useContext } from "react";
import useFetchData from "../hooks/useFetchData";

const HostVanContext = createContext()

function HostVanProvider( { children }){
    const data = useFetchData('api/host/vans')
    console.log( data )
    return <HostVanContext.Provider value={data}>{ children }</HostVanContext.Provider>
}

function useHostVanData(){
    const context = useContext( HostVanContext )
    console.log( `context: ${context}` )
    if( context === undefined){
        throw new Error(' useHostVanData must be used within a HostVanProvider ')
    }
    return context
}

export { HostVanProvider, useHostVanData }