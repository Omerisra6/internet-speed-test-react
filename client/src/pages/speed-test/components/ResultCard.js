import React from 'react'
import styled from 'styled-components'

const StyledResultCard = styled.div`

    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    padding: 2vh 5vw;
    background-color: var( --blue );
    -webkit-box-shadow: -2px -4px 39px 13px rgba(0,0,0,0.09); 
    box-shadow: -2px -4px 39px 13px rgba(0,0,0,0.09);
    border-radius: 8px;

    & > .result-card-top{

        display: flex;
        gap: 0.5vw;
        align-items: center;
        color: var( --orange-theme );
    }

    & > .result-card-top > .result-card-icon{

        font-size: var( --font-size-sm );
    }

    & > .result-card-top > .result-card-text{

        display: inline-block;
        font-size: var( --font-size-xs );
    }

    & > .result-card-data{

        font-size: var( --font-size-md );
        font-weight: bold;
        color: var( --light-text-color );
    }

    & > .result-card-unit{

        font-size: var( --font-size-xxs );
        color: var( --lighter-theme );
    }

`
export default function ResultCard( { icon, text, unit, data }) {

    return (
        <StyledResultCard>

            <div className='result-card-top'>

                <span className='material-icons result-card-icon'>{ icon }</span>
                <span className='result-card-text'>{ text }</span>

            </div>

            <div className='result-card-data'>{ data }</div>

            <div className='result-card-unit'>{ unit }</div>

        </StyledResultCard>
    )
}
