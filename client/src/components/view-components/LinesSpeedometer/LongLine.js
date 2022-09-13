import React from 'react'

export default function LongLine( { i, rot, linesCount, loading, markedCount } ) {
    return (
        <div className='long-speed-line-container'  key={ i } style={ { '--rot': rot, '--i': i, '--lines-count': linesCount } }>
            <span className={ `long-speed-line ${ loading  ? 'loading' :  i <= markedCount && 'marked' }` }></span>
            <span className={ `speed-number ${ loading  ? 'loading-text' :  i <= markedCount && 'marked-text' }` } >{ ( Math.floor( ( i ) * 3.3334 )) }</span>
        </div>
    )
}