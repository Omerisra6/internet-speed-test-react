import React from 'react'
import styled from 'styled-components'

const StyledLiveChat = styled.div`

    display: flex;
    height: 12vh;
    background-color: var( --black );
    justify-content: flex-start;
    font-size: 1.2vw;
    color: var( --light-text-color );
    padding: 3vh 1vw 3vh 1vw;
    margin-top: 5vh;
    font-weight: bold;
    border-radius:  8px;

    & > div > *{
        
        font-size: var( --font-size-xs );
    }

    & > div > .help-you-text{
        
        margin-bottom: auto;
    }

    & > div > .live-chat-text{

        cursor: pointer;
        margin-top: 4vh;
        color: var( --orange-theme );
    }


    & > div > .live-chat-text:hover{
        font-size: var( --font-size-sm );
    }

    & > .headset-icon{

        font-size: var( --font-size-lg );
        margin: auto;
    }
`
export default function LiveChat() {

    return (
        <StyledLiveChat>
            
            <div className='live-chat-text-container'>

                <div className='how-can-text'>How can we</div>
                <div className='help-you-text'>help you?</div>
                <div className='live-chat-text'>Live chat</div>

            </div>

            <span className='material-icons headset-icon'>headset_mic</span>
            

        </StyledLiveChat>
        
    )
}

