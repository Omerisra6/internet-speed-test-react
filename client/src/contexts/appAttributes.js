import React, { useContext } from "react";

const AppAttributesContext = React.createContext( null );

export const useAppAttributes = () => {
    
    return useContext( AppAttributesContext )  
}

export const AppAttributesProvider = ( { children, value } ) => {
   
    return <AppAttributesContext.Provider children={ children } value={ value }  />;
};
