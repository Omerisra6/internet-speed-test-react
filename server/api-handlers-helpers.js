const { exec } = require('child_process');
const { error } = require('console');

const os_func = function()
{
    this.execCommand = function( cmd )
    {
        return new Promise( ( resolve, reject ) => {
            exec( cmd, ( err, stdout, stderr ) => {   
                
                if ( err ) 
                {
                    reject( err )
                    return
                }

                if ( stderr ) 
                {
                    reject( stderr )
                    return
                }
                
                resolve( stdout)
            });
        })
    }
}

exports.getExecOutput =  async function( command ){

    let execOutput
    const osFunction = new os_func()
    await osFunction.execCommand( command )
    .then( res => {

        execOutput = { 'status': 200, 'data': res }
    })
    .catch( err =>{

        execOutput = { 'status': 400, 'data': err }
    })

    return execOutput
}