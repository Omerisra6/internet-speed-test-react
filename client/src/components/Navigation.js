import styled from 'styled-components'
import Link from './view-components/Link';

const StyledNavigation = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate( -50%);

    & > *{
        padding: 0 3vw;
        display: flex;
        align-items: center;
    }
`

const navButtons = 
[
    { 'icon': 'speed', 'url':'/', 'checked': true }, 
    { 'icon': 'pie_chart', 'url':'/stats', 'checked': false },
    { 'icon': 'language', 'url':'/language', 'checked': false }, 
    { 'icon': 'dns', 'url':'/dns' },
    { 'icon': 'tune', 'url':'/tune', 'checked': false }
];

export default function Navigation() {

    
    return (
        <StyledNavigation>

            { navButtons.map( ( navButton, index ) => {

                return <Link key={ index } index={ index } icon={ navButton.icon } url={ navButton.url } padding='md' size='sm' color={ navButton.checked ? 'orange': 'theme' } />

            })}
            
        </StyledNavigation>
    )
}
