import React from 'react'
import styled from 'styled-components'

const StyledLiveChat = styled.div`

    display: flex;
    background-color: var( --black );
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.2vw;
    color: var( --light-text-color );
    padding: 3vh 8vw 3vh 1vw;
    margin-top: 5vh;
    font-weight: bold;
    border-radius:  8px;

    & > .help-you-text{

        margin-bottom: auto;
    }

    & > .live-chat-text{

        margin-top: 4vh;
        color: var( --orange-theme );
    }

`
export default function LiveChat() {

    return (
        <StyledLiveChat>

            <div className='how-can-text'>How can we</div>
            <div className='help-you-text'>help you?</div>

            <div className='live-chat-text'>Live chat</div>

        </StyledLiveChat>
        
    )
}
