import React, { useEffect, useRef } from 'react'
import './lines-speedometer.css'

function getSpeedometerLines( markedCount, linesCount, loading ) 
{
    const rot = `${ 184/linesCount }deg`
    const lines = []

    for ( var i = 0; i < linesCount; i++ ) 
    {
        if ( linesCount !== 0)
        {
            i % 6 === 0 
            ?
            lines.push( 
                <div className='long-speed-line-container'  key={ i } style={ { '--rot': rot, '--i': i, '--lines-count': linesCount } }>
                    <span className={ `long-speed-line ${ loading  ? 'loading' :  i <= markedCount && 'marked' }` }></span>
                    <span className={ `speed-number ${ loading  ? 'loading-text' :  i <= markedCount && 'marked-text' }` } >{ ( Math.floor( ( i ) * 3.3334 )) }</span>
                </div>
            )
            :
            lines.push( <span className={ `short-speed-line ${ loading  ? 'loading' :  i <= markedCount && 'marked' }` } key={ i } style={ { '--rot': rot, '--i': i, '--lines-count': linesCount } }></span> )
        }
    }

    return lines
}

export default function LinesSpeedometer( { linesCount, markedCount, loading }) {

    const lines = getSpeedometerLines( markedCount, linesCount, loading )

    return (

        <div className='outside-speedometer-bar'>

            { lines }

        </div>
    )
}
