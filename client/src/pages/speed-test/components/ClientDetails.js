import styled from 'styled-components'
import { useTestDetails } from '../../../contexts/testDetails'
import ClientDetail from './ClientDetail'
import LiveChat from './LiveChat'

const StyledClientDetails = styled.div`

    width: 18%;
    display: flex;  
    flex-direction: column;
    padding-top: 5vh;
`

const clientDetailsObject = {
    userIp: { icon: 'wifi', title: 'IP Address' },
    userLocation: { icon: 'pin_drop', title: 'Location' },
    server: { icon: 'language', title: 'Server' },
    os: { icon: 'album',title: 'OS' },
};

export default function ClientDetails() {

    const testDetails = useTestDetails()
    return (
        <StyledClientDetails>

            { Object.keys( clientDetailsObject ).map( ( detailKey  ) => {
                
                return <ClientDetail key={ detailKey } detailKey={ detailKey } icon={ clientDetailsObject[ detailKey ].icon } data={ testDetails[ detailKey ] } title={ clientDetailsObject[ detailKey ].title }/>

            })}

            <LiveChat/>

        </StyledClientDetails>
    )
}
