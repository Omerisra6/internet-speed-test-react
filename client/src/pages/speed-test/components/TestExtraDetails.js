import styled from 'styled-components'
import { useTestDetails } from '../../../contexts/testDetails'
import TestExtraDetail from './TestExtraDetail'

const StyledTestExtraDetails = styled.div`
    position: relative;
    top: 21vh;
    z-index: 1;
    display: flex;
    gap: 10px;
`

const extraDetails = {
    server: { 'name': 'Server' },
    userIp: { 'name': 'IP Address' },
}

export default function TestExtraDetails() {

    const testDetails = useTestDetails()

    return (

        <StyledTestExtraDetails>

            { Object.keys( extraDetails ).map( ( detailKey ) => {

                const currentDetail = extraDetails[ detailKey ]
                return <TestExtraDetail key={ detailKey } detailKey={ detailKey } name={ currentDetail.name } value={ testDetails[ detailKey ] }/>
            })}

        </StyledTestExtraDetails>
    )
}
