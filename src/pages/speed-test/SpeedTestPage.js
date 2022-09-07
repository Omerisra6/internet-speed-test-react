import React from 'react'
import styled from 'styled-components'
import { TestDetailsProvider } from '../../contexts/testDetails'
import ResultsCardsContainer from './components/ResultsCardsContainer'
import ClientDetails from './components/ClientDetails'
import SpeedDetails from './components/SpeedDetails'

const StyledSpeedTestPage = styled.div`
    width: 100vw;
    height: 90vh;
    min-height: 390px;
    min-width: 910px;
`

const StyledTestDetails = styled.div`
    
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 7vh 5vw 0 5vw;
    min-height: 410px;
    min-width: 750px;
`

export default function SpeedTestPage() {

    return (
        <StyledSpeedTestPage>

            <TestDetailsProvider>

                <StyledTestDetails>

                    <ClientDetails/>

                    <SpeedDetails/>

                    <ResultsCardsContainer/>

                </StyledTestDetails>`

            </TestDetailsProvider>
            
        </StyledSpeedTestPage>
    )
}
