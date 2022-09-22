import React from 'react'
import styled from 'styled-components'
import { Circle } from '../../../components/view-components/Circle'
import { getData } from '../../../api.js'
import { useTestDetails } from '../../../contexts/testDetails'

const StyledTestButton = styled( Circle )`

    z-index: 1;
    cursor: pointer;
    padding: 0.5vw;
    position: relative;
    top: 18vh;

    &:hover{

        background-color: var( --black );
    }

    &:hover .test-button-icon{
        
        color: var( --lighter-theme );
    }

`

function testSpeed( setTestDetails, setLoading, setError )
{
    setError( false )
    setLoading( true )
    
    getData( '' ).then( res => {

        setLoading( false )
        if( res.status !== 200 )
        {
            setError( true )
        }
        
        res.json().then( data => {

            setTestDetails( data )        
        })
    })    
}

export default function TestButton( { setLoading, setError } ) {
    
    const { setTestDetails } = useTestDetails()

    return (

        <StyledTestButton size='sm' color='theme' onClick={ () => { testSpeed( setTestDetails, setLoading, setError ) } }>

            <span className='test-button-icon'>⟳</span>

        </StyledTestButton>
    )
}
