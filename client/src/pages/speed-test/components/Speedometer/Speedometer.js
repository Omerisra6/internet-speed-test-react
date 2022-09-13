import React, { useEffect, useRef  } from 'react'
import LinesSpeedometer from '../../../../components/view-components/LinesSpeedometer/LinesSpeedometer'
import { useTestDetails } from '../../../../contexts/testDetails'
import TestResults from '../TestResults'
import './speedometer.css'

function toggleAnimation( speedometerElement, loading ) {

    speedometerElement.classList.toggle( 'loading-animation', loading )
    speedometerElement.classList.toggle( 'forwards-animation', ! loading )
}

export default function Speedometer( { loading } ) {

    const { downloadSpeed } = useTestDetails()
    const speedometerRef    = useRef( null )
    const linesCount        = 49
    const maxSpeed          = 160
    const speedRatio        = downloadSpeed / maxSpeed
    const speedPercentage   = speedRatio * 100
    const markedCount       = ( speedRatio *  linesCount ) 

    useEffect( () => {
        
        toggleAnimation( speedometerRef.current, loading )
    }, [ loading ])

    return (
        <div className="speedometer">

            <div className='inside-speedometer-bar forwards-animation' ref={ speedometerRef } style={ { '--value' : speedPercentage, '--lines-count': linesCount, '--line-delay': 20 } }>
                
                <LinesSpeedometer linesCount={ linesCount } markedCount={ markedCount } loading={ loading }/>
                
                <TestResults loading={ loading }/>
                
            </div>

            <div className='speedometer-background'></div>

        </div>
    )
}
