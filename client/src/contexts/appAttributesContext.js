import React, { useContext, useState } from "react";

const AppAttributesContext = React.createContext( null );

export const useAppAttributes = () => {
    
    return useContext( AppAttributesContext )  
}

export const AppAttributesProvider = ( { children } ) => {

    const [ loading, setLoading ] = useState( false )
    const [ error, setError ]     = useState( false )


    const value = 
    {
        loading,
        setLoading,
        error,
        setError
    };
   
    return <AppAttributesContext.Provider children={ children } value={ value }  />;
};
