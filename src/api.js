const BASE_URL = process.env.BASE_URL

const getData = ( async( url ) => {

    return await fetch( url ).then( ( res ) =>{  return res.json() })
    
});
