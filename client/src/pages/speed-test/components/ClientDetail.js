import React from 'react'
import styled from 'styled-components'

const StyledClientDetail = styled.div`

    padding: 3vh 2vw;
    display: flex;
    gap: 1vw;
`

const StyledLeftClientDetail = styled.div`

    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > .client-detail-icon{
        
        font-size: var( --font-size-sm );
        color: var( --orange-theme );
    }
`

const StyledRightClientDetail = styled.div`

    width: 80%;
    height: 5vh;
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
    font-size: var( --font-size-xxs );

    & > .client-detail-data{
        
        color: var( --light-text-color );
    }

    & > .client-detail-title{
        
        color: var( --lighter-theme );
    }

`

export default function ClientDetail( { detailKey, icon, data, title } ) {

    return (
        <StyledClientDetail>

            <StyledLeftClientDetail className='left-client-detail'>
                
                <span className='material-icons client-detail-icon'>{ icon }</span>

            </StyledLeftClientDetail>

            <StyledRightClientDetail className='right-client-detail'>

                <span className='client-detail-data' data-testid={ detailKey }>{ ! data ? '?' : data }</span>
                <span className='client-detail-title'>{ title }</span>

            </StyledRightClientDetail>

        </StyledClientDetail>                               
    )
}
