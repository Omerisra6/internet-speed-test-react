const { getExecOutput } = require( './api-handlers-helpers' );
var os = require('os');

exports.testSpeedHandler = async() => {

    const testCommandOutput = await getExecOutput( 'fast --upload --json' )

    //Handle no internet error
    if ( testCommandOutput.data == '› Please check your internet connection\n\n\n' ) 
    {    
        testCommandOutput.status = 400
    }

    if ( testCommandOutput.status !== 200 ) 
    {    
        return testCommandOutput
    }

    testCommandOutput.data        = JSON.parse( testCommandOutput.data )
    testCommandOutput.data.server = os.hostname() 
    testCommandOutput.data.os     = process.platform
    return testCommandOutput
}