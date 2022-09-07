import React from 'react'
import LinesSpeedometer from '../../../../components/view-components/LinesSpeedometer/LinesSpeedometer'
import TestResults from '../TestResults'
import './speedometer.css'

export default function Speedometer() {


    return (
        <div className="speedometer">

            <div className='inside-speedometer-bar' style={ { '--value' : 90 } }>
                
                <LinesSpeedometer linesCount={ 49 } markedCount={ 38 }/>
                
                <TestResults/>
                
            </div>

            <div className='speedometer-background'></div>

        </div>
    )
}
