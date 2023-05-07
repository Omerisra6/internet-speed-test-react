import React from 'react'
import LinesSpeedometer from '../../../../components/view-components/LinesSpeedometer/LinesSpeedometer'
import { useAppAttributes } from '../../../../contexts/appAttributesContext'
import { useTestResult} from '../../../../contexts/testResultContext'
import TestResults from '../TestResults/TestResults'
import { StyledSpeedometer } from './StyledSpeedometer'

export default function Speedometer( ) {

    const { testResult }     = useTestResult()
    const { downloadSpeed }  = testResult
    const { loading, error } = useAppAttributes()
    const linesCount         = 49
    const maxSpeed           = 160
    const speedRatio         = ! error ? downloadSpeed / maxSpeed : 0
    const speedPercentage    = speedRatio * 100 
    const markedCount        = speedRatio * linesCount 

    return (
        <StyledSpeedometer>

            <div className={ `inside-speedometer-bar ${ ! loading ? 'forwards-animation' : 'loading-animation' }` } data-testid='inside-speedometer-bar' style={ { '--value' : speedPercentage, '--lines-count': linesCount, '--line-delay': 20 } }>
                
                <LinesSpeedometer key='outside-speedometer-bar' linesCount={ linesCount } markedCount={ markedCount }/>
                <TestResults key='test-results'/>

            </div>

            <div className='speedometer-background'></div>

        </StyledSpeedometer>
    )
}
