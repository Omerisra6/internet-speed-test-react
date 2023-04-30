import React, { useContext, useState } from "react";

const TestDetailsContext = React.createContext( null );

export const useTestDetails = () => {
    
    return useContext( TestDetailsContext )  
}

export const TestDetailsProvider = ( { children } ) => {
    
    const [ uploadSpeed, setUploadSpeed ]     = useState( 0.0 );
    const [ downloadSpeed, setDownloadSpeed ] = useState( 0.0 );
    const [ latency, setLatency ]             = useState( 0 );
    const [ userIp, setUserIp ]               = useState( '' );
    const [ userLocation, setUserLocation ]   = useState( '' )
    const [ os, setOs ]                       = useState( '' )
    const [ server, setServer ]               = useState( '' )

    const setTestDetails = ( testResult ) =>{

        setUploadSpeed( testResult.uploadSpeed )
        setDownloadSpeed( testResult.downloadSpeed )
        setLatency( testResult.latency )
        setUserIp( testResult.userIp )
        setUserLocation( testResult.userLocation )
        setOs( testResult.os )
        setServer( testResult.server )
    }

    const value = 
    {
        uploadSpeed,
        downloadSpeed,  
        latency,
        userIp,
        userLocation,
        os,
        server,
        setTestDetails
    };

    return <TestDetailsContext.Provider children={ children } value={ value } />;
};
