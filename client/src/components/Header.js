import React from 'react'
import Logo from './view-components/Logo'
import Navigation from './Navigation'
import styled from 'styled-components'
import UserDetails from './UserDetails'

const StyledHeader = styled.div`

  z-index: 1;
  height: 6vh;
  width: 94vw;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 3vw;

  @media ( max-width: 640px ){

    & > .app-logo{
      
      font-size: 0.7rem;
    }
  }

`
export default function Header() {

  return (
    <StyledHeader className='header-container'>

      <Logo size="md"></Logo>

      <Navigation/>

      <UserDetails/>

    </StyledHeader>
  )
    
}
