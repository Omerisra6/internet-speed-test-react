import React from 'react'
import styled from 'styled-components'
import { Circle } from './view-components/Circle'
import Link from './view-components/Link'

const StyledUserDetails = styled.div`

    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & > .user-logo{
        padding: 1vh 0.8vw;
        width: 2vw;
        height: 2vw;
        border-radius: 50%;
    }


    & > .chat-container{
        display: flex;
        justify-content: flex-start;
    }

`
export default function UserDetails() {

    return (
        <StyledUserDetails>
            
            <div className='chat-container' key='chat-container'>
                <Circle color='red' size='xxs'>1</Circle>
                <Link icon={'chat_bubble_outline'} url='/chat' size='xs' color='light'/>
            </div>
            
            <Link className='user-notifications' key='user-notifications' icon={'notifications_none'} url='/chat' size='xs' color='theme'/>
            <img className='user-logo' key='user-logo' src='/assets/n-1.png'/>

        </StyledUserDetails>
    )
}    
