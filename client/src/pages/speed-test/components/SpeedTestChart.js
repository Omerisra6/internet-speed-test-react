import React from 'react'
import styled from 'styled-components'
import Speedometer from './Speedometer/Speedometer'

const StyledSpeedTestChart = styled.div`

    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 8vw;
    color: var( --lighter-text-color );
    max-height: 410px;
    
    & > .speed-test-text{

        position: relative;
        bottom: 18vh;
        z-index: 1;
        font-size: var( --font-size-lg );
        font-weight: bold;
    }
`
export default function SpeedTestChart( { loading } ) {

    return (
        <StyledSpeedTestChart>

            <div className='speed-test-text'>

                <div className='speed-text'>SPEED</div>
                <div className='test-text'>TEST</div>                

            </div>

            <Speedometer loading={ loading }/>

        </StyledSpeedTestChart>
    )
}
