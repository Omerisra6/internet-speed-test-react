import React from 'react'
import styled from 'styled-components'
import { useTestDetails } from '../../../contexts/testDetails'

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
        
        padding-top: 10px;
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
export default function TestResults( { loading } ) {

    const { downloadSpeed, latency } = useTestDetails()
    return (
        <StyledTestResults className='test-results'>

            <div className='speed-result'>
                <span className='material-icons speed-type-icon'>download</span>
                <div className='speed-result-text'>{ ! loading ? downloadSpeed : 'Testing...'}</div>    
                <div className='mbps-text'>mbps</div>
            </div>

            <div className='ping-result-container'>

                <span className='ping-text'>Latency</span>
                <span className='ping-result-text'> { latency }</span>
            </div>

        </StyledTestResults>
    )
}

