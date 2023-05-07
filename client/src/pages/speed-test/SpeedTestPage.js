import React from 'react'
import styled from 'styled-components'
import { TestResultProvider } from '../../contexts/testResultContext'
import ResultsCardsContainer from './components/ResultsCardsContainer'
import ClientDetails from './components/ClientDetails'
import SpeedDetails from './components/SpeedDetails/SpeedDetails'

const StyledSpeedTestPage = styled.div`

    width: 100vw;
    height: 90vh;
    min-height: 390px;
    min-width: 910px;

    @media ( max-width: 640px )
    {
        min-width: 0;
        min-height: 0;
    }
`

const StyledTestDetails = styled.div`
    
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 7vh 5vw 0 5vw;
    min-height: 410px;
    min-width: 750px;
    
    @media ( max-width: 640px )
    {
        min-width: 0;
        min-height: 0;
    }
`

export default function SpeedTestPage() {

    return (
        <StyledSpeedTestPage>

            <StyledTestDetails>

                <TestResultProvider>

                    <ClientDetails/>

                    <SpeedDetails/>

                    <ResultsCardsContainer/>
                    
                </TestResultProvider>

            </StyledTestDetails>`

        </StyledSpeedTestPage>
    )
}
