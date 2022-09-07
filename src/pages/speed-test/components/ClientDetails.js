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
    ip: { icon: 'wifi', title: 'IP Address' },
    type: { icon: 'linear_scale', title: 'Type' },
    provider: { icon: 'language', title: 'Provider' },
    os: { icon: 'album',title: 'OS' },
};

export default function ClientDetails() {

    const { clientDetails } = useTestDetails();

    return (
        <StyledClientDetails>

            { Object.keys( clientDetailsObject ).map( ( detailKey  ) => {
                
                return <ClientDetail key={ detailKey } icon={ clientDetailsObject[ detailKey ].icon } data={ clientDetails[ detailKey ] } title={ clientDetailsObject[ detailKey ].title }/>

            })}

            <LiveChat/>

        </StyledClientDetails>
    )
}
