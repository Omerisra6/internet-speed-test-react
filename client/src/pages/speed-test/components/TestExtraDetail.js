import React from 'react'
import styled from 'styled-components'

const StyledExtraDetail = styled.div`

    display: flex;
    gap: 5px;

    & > .extra-detail-name{

        font-size: var( --font-size-xxs );
        color: var( --lighter-theme );
    }

    & > .extra-detail-value{

        font-size: var( --font-size-xxs );
        color: var( --light-text-color );
    }
`
export default function TestExtraDetail( { detailKey, name, value } ) {
    
    return (
        <StyledExtraDetail>

            <span className='extra-detail-name'>{ name }</span>
            <span className='extra-detail-value' data-testid={ detailKey }>{ value }</span>

        </StyledExtraDetail>
    )
}
