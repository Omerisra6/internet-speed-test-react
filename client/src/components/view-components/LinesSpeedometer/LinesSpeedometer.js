import React from 'react'
import { useAppAttributes } from '../../../contexts/appAttributes'
import './lines-speedometer.css'
import LongLine from "./LongLine"
import ShortLine from "./ShortLine"

function getSpeedometerLines( markedCount, linesCount, loading ) 
{
    const rot = `${ 184/linesCount }deg`
    const lines = []

    for ( var i = 0; i < linesCount; i++ ) 
    {
        i % 6 === 0 
        ?
        lines.push( 
            <LongLine i={ i } rot={ rot } linesCount={ linesCount } markedCount={ markedCount } loading={ loading }/>
        )
        :
        lines.push(  
            <ShortLine i={ i } rot={ rot } linesCount={ linesCount } markedCount={ markedCount } loading={ loading }/>
        )
    }

    return lines
}

export default function LinesSpeedometer( { linesCount, markedCount }) {

    const { loading } = useAppAttributes()
    const lines = getSpeedometerLines( markedCount, linesCount, loading )

    return (

        <div className='outside-speedometer-bar'>

            { lines }

        </div>
    )
}
