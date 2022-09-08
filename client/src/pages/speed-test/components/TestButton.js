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
    top: 120px;

    &:hover{

        background-color: var( --black );
    }

    &:hover .test-button-icon{
        
        color: var( --lighter-theme );
    }

`

async function testSpeed( setDownloadSpeed, setUploadSpeed, setClientDetails ){

    const testResponse =  await getData( '' )

    setUploadSpeed( testResponse.uploadSpeed )
    setDownloadSpeed( testResponse.downloadSpeed )
    setClientDetails( { 'os': testResponse.os, 'server': testResponse.server, 'ip': testResponse.ip } )
    
}

export default function TestButton() {
    
    const { setDownloadSpeed, setUploadSpeed, setClientDetails } = useTestDetails()

    return (

        <StyledTestButton size='sm' color='theme' onClick={ () => { testSpeed( setDownloadSpeed, setUploadSpeed, setClientDetails ) } }>

            <span className='test-button-icon'>⟳</span>

        </StyledTestButton>
    )
}
