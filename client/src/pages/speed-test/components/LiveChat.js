import React from 'react'
import styled from 'styled-components'

const StyledLiveChat = styled.div`

    display: flex;
    height: 12vh;
    min-height: 65px;
    background-color: var( --black );
    justify-content: flex-start;
    align-items: center;
    color: var( --light-text-color );
    padding: 3vh 1vw 3vh 1vw;
    margin-top: 5vh;
    font-weight: bold;
    border-radius:  8px;
    font-size: var( --font-size-xs );

    & > .live-chat-text-container{

        display: flex;
        justify-self: center;
        flex-direction: column;
        height: 70%;
    }

    & > div > .help-you-text{
        
        margin-bottom: auto;
    }

    & > div > .live-chat-text{

        cursor: pointer;
        color: var( --orange-theme );
    }


    & > div > .live-chat-text:hover{

        font-size: var( --font-size-sm );
    }

    & > .headset-icon{

        font-size: var( --font-size-lg );
        margin: auto;
    }

    @media ( max-width: 640px ){

        height: 8vh;
        min-height: 0;    
        width: 20vw;
        
        padding: 2vw 4vw;

        & > div > *{
        
            font-size: var( --font-size-sm );
        }

        & > div > .live-chat-text:hover{

            font-size: var( --font-size-md );
        }   
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

