import React, { useRef  } from 'react'
import LinesSpeedometer from '../../../../components/view-components/LinesSpeedometer/LinesSpeedometer'
import { useAppAttributes } from '../../../../contexts/appAttributes'
import { useTestDetails } from '../../../../contexts/testDetails'
import TestResults from '../TestResults/TestResults'
import './speedometer.css'

export default function Speedometer( ) {

    const { downloadSpeed }  = useTestDetails()
    const { loading, error } = useAppAttributes()
    const speedometerRef     = useRef( null )
    const linesCount         = 49
    const maxSpeed           = 160
    const speedRatio         = ! error ? downloadSpeed / maxSpeed : 0
    const speedPercentage    = speedRatio * 100 
    const markedCount        = speedRatio * linesCount 

    return (
        <div className="speedometer">

            <div className={ `inside-speedometer-bar ${ ! loading ? 'forwards-animation' : 'loading-animation' }` } data-testid='inside-speedometer-bar' ref={ speedometerRef } style={ { '--value' : speedPercentage, '--lines-count': linesCount, '--line-delay': 20 } }>
                
                <LinesSpeedometer key='outside-speedometer-bar' linesCount={ linesCount } markedCount={ markedCount }/>
                <TestResults key='test-results'/>

            </div>

            <div className='speedometer-background'></div>

        </div>
    )
}
