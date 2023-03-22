import { useState, useEffect } from "react";

export default function useFetchData( url, id='' ){
    const [ data , setData ] = useState( ()=> id !== ''? null : [] )       


    let dependency = id == '' ? url : id

    let newURL = id =='' ? url : `${url}/${id}`

    useEffect( () => {
        if( url){
            let ignore = false
            fetch(newURL)
            .then( res => res.json())
            .then( data => {
                if( !ignore){
                    setData( data.vans )
                }
            })
            return () => {
                ignore = true
            }
        }
    },[dependency])
    return data 

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