const cors = require('cors')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000
const { testSpeedHandler } = require( './api-handlers' )

require('dotenv').config();
app.use(cors())

app.get("/", async ( req, res ) => { 

    const speedTestData = await testSpeedHandler()
    res.status( speedTestData.status )
    res.send( speedTestData.data )    
});

app.listen( PORT, () => {

    console.log( `Listen on the port ${ PORT }` );
});