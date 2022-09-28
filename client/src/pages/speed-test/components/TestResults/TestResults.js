import React from 'react'
import styled from 'styled-components'
import { useAppAttributes } from '../../../../contexts/appAttributes'
import { useTestDetails } from '../../../../contexts/testDetails'

const StyledTestResults = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    margin-top: 20px;

    & > .speed-result > .speed-type-icon{

        font-size: var( --font-size-sm );
        color: var( --orange-theme );
    }

    & > .speed-result > .speed-result-text{

        font-weight: bold;
        font-size: var( --font-size-lg );
        color: var( --white );
    }

    & > .speed-result > .mbps-text{

        font-size: var( --font-size-xs );
        color: var( --lighter-theme );
    }

    & > .ping-result-container{

        display: flex;
        padding-top: 10px;
        gap: 0.5vw;
    }

    & > .ping-result-container > .ping-text{

        font-size: var( --font-size-xxs );
        color: var( --orange-theme );
    }


    & > .ping-result-container > .ping-result-text{

        font-size: var( --font-size-xxs );
        color: var( --white );
    }


`
export default function TestResults() {

    const { loading, error } = useAppAttributes()
    const { downloadSpeed, latency } = useTestDetails()
    
    return (
        <StyledTestResults className='test-results'>

            <div className='speed-result'>
                <span className='material-icons speed-type-icon'>download</span>
                <div className='speed-result-text' data-testid='downloadSpeed' >{ ! loading && ! error ? downloadSpeed : loading ? 'Testing...' : 'No connection' }</div>    
                <div className='mbps-text'>mbps</div>
            </div>

            <div className='ping-result-container'>

                <span className='ping-text'>Latency</span>
                <span className='ping-result-text' data-testid='latency'>{ latency }</span>
            </div>

        </StyledTestResults>
    )
}

