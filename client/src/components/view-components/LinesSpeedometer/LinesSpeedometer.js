import React from 'react'
import './lines-speedometer.css'

export default function LinesSpeedometer( { linesCount, markedCount,  }) {

    const lines = [];
    const rot = `${ 184/linesCount }deg`

    for ( var i = 0; i < linesCount; i++ ) {

        
        i % 6 === 0 
        ?
        lines.push( 
            <div className='long-speed-line-container'  key={ i } style={ { '--rot': rot, '--i': i } }>
                <span className={ `long-speed-line ${ i <= markedCount ? 'marked' : '' }` }></span> 
                <span className={ `speed-number ${ i <= markedCount ? 'marked-text' : '' }` } >{ ( Math.floor( ( i ) * 3.3334 ))   }</span>
            </div>
        )
        :
        lines.push( <span className={ `short-speed-line ${ i <= markedCount ? 'marked' : '' }` } key={ i } style={ { '--rot': rot, '--i': i } }></span> )

    }

    return (

        <div className='outside-speedometer-bar'>

            { lines }

        </div>
    )
}
