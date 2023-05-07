import axios from "axios";
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SpeedTestPage from "./SpeedTestPage";
import { act } from "react-dom/test-utils";



jest.mock( 'axios' )

const MOCK_TEST_DETAILS = 
{ 
    "downloadSpeed":50,"uploadSpeed":7.9,
    "downloaded":110,"uploaded":20,
    "latency":21,"bufferBloat":192,
    "userLocation":"Jerusalem, IL","userIp":"2a00:a040:197:22aa:804e:c312:1c2e:3b9e",
    "server":"LAPTOP-MJG5S0F3","os":"win32"
}

it( 'Shows test details on a succesfull result', async () => {

    //Arrange
    axios.get.mockResolvedValueOnce( { data: MOCK_TEST_DETAILS } )
    render( 

        <SpeedTestPage/>
    )

    //Act
    const testButton = screen.getByTestId( 'test-button' )
    await act( () => fireEvent.click( testButton ) )
    
    
    //Assert
    const testDataElementsLists =
    { 
        userLocation: screen.getAllByTestId( 'userLocation' ),
        userIp: screen.getAllByTestId( 'userIp' ),
        server: screen.getAllByTestId( 'server' ),
        os: screen.getAllByTestId( 'os' ),
        downloadSpeed: screen.getAllByTestId( 'downloadSpeed' ),
        uploadSpeed: screen.getAllByTestId( 'uploadSpeed' ),
        latency: screen.getAllByTestId( 'latency' ),
    }

    Object.keys( testDataElementsLists ).forEach( dataKey => {

        testDataElementsLists[ dataKey ].forEach( dataElement => {
            
            expect( dataElement ).toHaveTextContent( MOCK_TEST_DETAILS[ dataKey ] )
        })
    })

})