import React from 'react'
import styled from 'styled-components'
import { Circle } from '../../../components/view-components/Circle'
import { getData } from '../../../api.js'
import { useTestDetails } from '../../../contexts/testDetails'

const StyledTestButton = styled( Circle )`

    cursor: pointer;
    padding: 0.5vw;

    &:hover{

        background-color: var( --black );
    }

    &:hover .test-button-icon{
        
        color: var( --lighter-theme );
    }

`
export default function TestButton() {

    const { setUploadSpeed, setDownloadSpeed, setClientDetails } = useTestDetails()

    const testSpeed = ( async () => {

        const testResponse = await getData()

        if ( testResponse.status !== 200 ) {

            return
        }

        // testResponse.then( data =>{

        //     setUploadSpeed( data.setUploadSpeed )
        //     setDownloadSpeed( data.setDownloadSpeed )
        //     setClientDetails( { 'op': data.op, 'type': data.type })
        // })
    }) 

    return (

        <StyledTestButton size='sm' color='theme' onClick={ getData }>

            <span className='test-button-icon'>⟳</span>

        </StyledTestButton>
    )
}
