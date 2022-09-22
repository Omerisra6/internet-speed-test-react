import React, { useState } from 'react'
import styled from 'styled-components'
import { AppAttributesProvider } from '../../../contexts/appAttributes'
import SpeedTestChart from './SpeedTestChart'
import TestButton from './TestButton'
import TestExtraDetails from './TestExtraDetails'

const StyledSpeedDetails = styled.div`

    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7vh;
    position: absolute;
    left: 50%;
    top: 53%;
    transform: translate( -50%, -50%);
`
export default function SpeedDetails() {

    const [ loading, setLoading ] = useState( false )
    const [ error, setError ]     = useState( false ) 

    return (
        <StyledSpeedDetails>

            <AppAttributesProvider value={ { loading, error } }>

                <SpeedTestChart/>

            </AppAttributesProvider>

            <TestExtraDetails/>

            <TestButton setLoading={ setLoading } setError={ setError }/>

        </StyledSpeedDetails>
    )
}
