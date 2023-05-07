import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/view-components/Button'
import { getData } from '../../../utils/api.js'
import { useTestResult } from '../../../contexts/testResultContext'
import { useAppAttributes } from '../../../contexts/appAttributesContext'

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

    @media ( max-width: 640px ) {
        top: 7vh;
        padding: 2vh;
    }

   

`

export default function TestButton(  ) {
    
    const { setTestResult }                 = useTestResult()
    const { loading, setLoading, setError } = useAppAttributes()
    return (

        <StyledTestButton size='sm' color='theme' circle={ true } data-testid='test-button' disabled={ loading } onClick={ () => { testSpeed( setTestResult, setLoading, setError ) } }>

            <span className='test-button-icon material-icons'>replay</span>

        </StyledTestButton>
    )

    async function testSpeed( setTestResult, setLoading, setError )
    {   
        setError( false )
        setLoading( true )
        
        await getData( '' ).then( res => {

            setTestResult( res.data )        
        }).catch( function( error ){

            setError( true )
        })  

        setLoading( false )
    }
}

