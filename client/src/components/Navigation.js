import styled from 'styled-components'
import Link from './view-components/Link';

const StyledNavigation = styled.div`

    display: flex;
    justify-content: center;
`

const navButtons= [
    { 'icon': 'speed', 'url':'/' }, { 'icon': 'pie_chart', 'url':'/stats' },
    { 'icon': 'language', 'url':'/language' }, { 'icon': 'dns', 'url':'/dns' },
    { 'icon': 'tune', 'url':'/tune' }
];

export default function Navigation() {

    
    return (
        <StyledNavigation>

            { navButtons.map( ( navButton, index ) => {

                return <Link index={ index } icon={ navButton.icon } url={ navButton.url } padding='md' size='sm' color='theme' />

            })}
            
        </StyledNavigation>

    )
}
