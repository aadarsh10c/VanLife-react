import { useState, useEffect } from "react";

export default function useFetchData( url, id='' ){
    const [ data , setData ] = useState( ()=> id !== ''? null : [] )  
    const [ loading , setLoading ] = useState( false )  
    const [ error , setError ] = useState( null )   

    async function loadData( url ){

        let res = await fetch(url)

        if( !res.ok ){
            throw{
                message: "Failed to fetch vans", 
                statusText: res.statusText,
                status: res.status
            }
        }
        let data = await res.json()
        return data
    }

    let dependency = id == '' ? url : id

    let newURL = id =='' ? url : `${url}/${id}`

    useEffect( () => {
        async function getVans(  ){
            setLoading( true )
            try {
                let data = await loadData( newURL )
                setData( data.vans ) 
            } catch (error) {
                setError( error )
            }
            setLoading( false )               
        }
        getVans()
    },[ dependency ] )

    return {data, loading , error } 

}

// function useData(url) {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//       if (url) {
//         let ignore = false;
//         fetch(url)
//           .then(response => response.json())
//           .then(json => {
//             if (!ignore) {
//               setData(json);
//             }
//           });
//         return () => {
//           ignore = true;
//         };
//       }
//     }, [url]);
//     return data;
//   }