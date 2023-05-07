import React from 'react'
import styled from 'styled-components'
import { Circle } from './view-components/Circle'
import Link from './view-components/Link'
import logo from '../images/N-1.png'

const StyledUserDetails = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;

    & > *{
        height: 6vh;
        display: flex;
        align-items: center;
        padding: 0;
    }

    & > .user-logo-container > img{
        border-radius: 50%;
        width: 2vw;
        height: 2vw;
    }


    & > .chat-container > .chat-circle{
        position: absolute;
        top: 1vh;
        right: 1vw;
    }

    & > .chat-container{
        position: relative;
    }

`
export default function UserDetails() {

    return (
        <StyledUserDetails>
            
            <div className='chat-container' key='chat-container'>
                <Circle color='red' size='xxs' className='chat-count'>1</Circle>
                <Link icon={'chat_bubble_outline'} url='/chat' size='xs' color='light'/>
            </div>
            
            <Link className='user-notifications' key='user-notifications' icon={'notifications_none'} url='/chat' size='xs' color='theme'/>
            <div className='user-logo-container'>
                <img className='user-logo' key='user-logo' src={ logo }/>
            </div>
            

        </StyledUserDetails>
    )
}    
