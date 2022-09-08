import styled from 'styled-components'
import { useTestDetails } from '../../../contexts/testDetails'
import TestExtraDetail from './TestExtraDetail'

const StyledTestExtraDetails = styled.div`
    position: relative;
    top: 120px;
    z-index: 1;
    display: flex;
    gap: 10px;
`

const extraDetails = {
    provider: { 'name': 'Provider' },
    ip: { 'name': 'IP Address' },
}

export default function TestExtraDetails() {

    const { clientDetails } = useTestDetails()

    return (

        <StyledTestExtraDetails>

            { Object.keys( extraDetails ).map( ( detailKey ) => {

                const currentDetail = extraDetails[ detailKey ]
                return <TestExtraDetail key={ detailKey } name={ currentDetail.name } value={ clientDetails[ detailKey ] }/>
            })}

        </StyledTestExtraDetails>
    )
}
