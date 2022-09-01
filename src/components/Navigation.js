import React, { useState } from 'react'
import styled from 'styled-components'
import Link from './view-components/Link';

const StyledNavigation = styled.div`

    display: flex;
    justify-content: center;
`
export default function Navigation() {

    const [ Navbuttons ] = useState([ 
        { 'icon': 'speed', 'url':'/' }, { 'icon': 'pie_chart', 'url':'/stats' },
        { 'icon': 'language', 'url':'/language' }, { 'icon': 'dns', 'url':'/dns' },
        { 'icon': 'tune', 'url':'/tune' }
    ]);

    return (
        <StyledNavigation>

            { Navbuttons.map( ( navButton, index ) => {

                return <Link index={ index } icon={ navButton.icon } url={ navButton.url } padding='md' size='sm' color='theme' />

            })}
            
        </StyledNavigation>

    )
}
