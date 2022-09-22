import React, { useRef  } from 'react'
import LinesSpeedometer from '../../../../components/view-components/LinesSpeedometer/LinesSpeedometer'
import { useAppAttributes } from '../../../../contexts/appAttributes'
import { useTestDetails } from '../../../../contexts/testDetails'
import TestResults from '../TestResults'
import './speedometer.css'

export default function Speedometer( ) {

    const { downloadSpeed }  = useTestDetails()
    const { loading, error } = useAppAttributes()
    const speedometerRef     = useRef( null )
    const linesCount         = 49
    const maxSpeed           = 160
    const speedRatio         = downloadSpeed / maxSpeed
    const speedPercentage    = ! error ? speedRatio * 100 : 0
    const markedCount        = speedRatio * linesCount 

    return (
        <div className="speedometer">

            <div className={ `inside-speedometer-bar ${ ! loading ? 'forwards-animation' : 'loading-animation' }` } ref={ speedometerRef } style={ { '--value' : speedPercentage, '--lines-count': linesCount, '--line-delay': 20 } }>
                
                <LinesSpeedometer linesCount={ linesCount } markedCount={ markedCount }/>
                <TestResults/>

            </div>

            <div className='speedometer-background'></div>

        </div>
    )
}
