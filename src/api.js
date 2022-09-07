const BASE_URL = process.env.BASE_URL

export async function getData( url = BASE_URL ) {

    return await fetch( url ).then( ( res ) =>{  return res.json() })
} 
