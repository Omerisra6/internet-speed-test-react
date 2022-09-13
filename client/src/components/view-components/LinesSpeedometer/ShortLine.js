import React from 'react'

export default function ShortLine( { i, rot, linesCount, loading, markedCount } ) {
    return (
        <span className={ `short-speed-line ${ loading  ? 'loading' :  i <= markedCount && 'marked' }` } key={ i } style={ { '--rot': rot, '--i': i, '--lines-count': linesCount } }></span>
    )
}
