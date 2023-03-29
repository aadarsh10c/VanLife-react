  

  export default async function getVansData( url , id='' ){
        console.log( ' inside fetching data ...')
        let newURL = id =='' ? url : `${url}/${id}`
        console.log( newURL )
        let res = await fetch(newURL)

        if( !res.ok ){
            throw{
                message: "Failed to fetch vans", 
                statusText: res.statusText,
                status: res.status
            }
        }

        let data = await res.json()
        console.log( data )
        return data.vans
    }