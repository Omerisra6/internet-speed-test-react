import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/view-components/Button'
import { getData } from '../../../api.js'
import { useTestDetails } from '../../../contexts/testDetails'

const StyledTestButton = styled( Button )`

    z-index: 1;
    cursor: pointer;
    padding: 0.5vw;
    position: relative;
    top: 18vh;

    & > .test-button-icon{
        
        color: var( --orange-theme );
        font-size: var( --font-size-sm );
    }

    &:hover{

        background-color: var( --black );
    }

    &:hover > .test-button-icon{
        
        color: var( --lighter-theme );
    }

   

`

async function testSpeed( setTestDetails, setLoading, setError )
{   
    setError( false )
    setLoading( true )
    
    await getData( '' ).then( res => {

        setTestDetails( res.data )        
    }).catch( function( error ){

        setError( true )
    })  

    setLoading( false )
}

export default function TestButton( { loading, setLoading, setError } ) {
    
    const { setTestDetails } = useTestDetails()

    return (

        <StyledTestButton size='sm' color='theme' circle={ true } data-testid='test-button' disabled={ loading } onClick={ () => { testSpeed( setTestDetails, setLoading, setError ) } }>

            <span className='test-button-icon material-icons'>replay</span>

        </StyledTestButton>
    )
}

