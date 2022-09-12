const API_URL = process.env.REACT_APP_API_URL

export async function getData( url ) {

    const fetchUrl = url ? API_URL + url : API_URL 

    return await fetch( fetchUrl ).then( ( res ) =>{ 
        return res
    } )
} 
