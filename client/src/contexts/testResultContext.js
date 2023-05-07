import React, { useContext, useState } from "react";

const TestResultContext = React.createContext( null );

export const useTestResult = () => {
    
    return useContext( TestResultContext )  
}

export const TestResultProvider = ( { children } ) => {
    

    const [ testResult, setTestResult ] = useState( {
        uploadSpeed: 0.0, downloadSpeed: 0.0,
        latency: 0, userIp: '',
        userLocation: '', os: '',
        server: ''
    } )


    const value = 
    {
        testResult,
        setTestResult
    };

    return <TestResultContext.Provider children={ children } value={ value } />;
};
