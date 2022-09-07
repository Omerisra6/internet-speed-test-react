import React, { useContext, useState } from "react";

const TestDetailsContext = React.createContext( null );

export const useTestDetails = () => {
    
    return useContext( TestDetailsContext )  
}

export const TestDetailsProvider = ( { children } ) => {
    
    const [ uploadSpeed, setUploadSpeed ] = useState( 20 );
    const [ downloadSpeed, setDownloadSpeed ] = useState( 17.7 );
    const [ ping, setPing ] = useState( 5 );
    const [ clientDetails, setClientDetails ] = useState( { 
        'os': 'Windows 10 64bit',
        'provider': 'HOT',
        'type': 'socks 5',
        'ip': '70.8.11.201'
    } );


    const value = {
        uploadSpeed,
        setUploadSpeed,
        downloadSpeed,  
        setDownloadSpeed,
        ping,
        setPing,
        clientDetails,
        setClientDetails
    };

    return <TestDetailsContext.Provider children={ children } value={ value } />;
};
