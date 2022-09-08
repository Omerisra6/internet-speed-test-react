import React from 'react'
import Logo from './view-components/Logo'
import Navigation from './Navigation'
import styled from 'styled-components'
import UserDetails from './UserDetails'

const StyledHeader = styled.div`

  z-index: 1;
  height: 6vh;
  width: 90vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vh 5vw 0 5vw;

`
export default function Header() {

  return (
    <StyledHeader className='header-container'>

      <Logo size="sm"></Logo>

      <Navigation/>

      <UserDetails/>

    </StyledHeader>
  )
    
}
