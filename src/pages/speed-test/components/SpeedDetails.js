import React from 'react'
import styled from 'styled-components'
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
    top: 55%;
    transform: translate( -50%, -50%);
`
export default function SpeedDetails() {

    return (
        <StyledSpeedDetails>

            <SpeedTestChart/>

            <TestExtraDetails/>
            
            <TestButton/>

        </StyledSpeedDetails>
    )
}
