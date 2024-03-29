import styled from 'styled-components'
import { useTestResult } from '../../../contexts/testResultContext'
import TestExtraDetail from './TestExtraDetail'

const StyledTestExtraDetails = styled.div`
    position: relative;
    top: 21vh;
    z-index: 1;
    display: flex;
    gap: 10px;

    @media ( max-width: 640px ) {
        top: 11vh;
    }
`

const extraDetails = {
    server: { 'name': 'Server' },
    userIp: { 'name': 'IP Address' },
}

export default function TestExtraDetails() {

    const { testResult } = useTestResult()

    return (

        <StyledTestExtraDetails>

            { Object.keys( extraDetails ).map( ( detailKey ) => {

                const currentDetail = extraDetails[ detailKey ]
                return <TestExtraDetail key={ detailKey } detailKey={ detailKey } name={ currentDetail.name } value={ testResult[ detailKey ] }/>
            })}

        </StyledTestExtraDetails>
    )
}
