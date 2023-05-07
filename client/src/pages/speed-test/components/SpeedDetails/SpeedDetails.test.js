import axios from "axios";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestDetailsProvider } from '../../../../contexts/testDetails'
import SpeedDetails from './SpeedDetails';



jest.mock( 'axios' )

const MOCK_TEST_DETAILS = 
{ 
    "downloadSpeed":50,"uploadSpeed":7.9,
    "downloaded":110,"uploaded":20,
    "latency":21,"bufferBloat":192,
    "userLocation":"Jerusalem, IL","userIp":"2a00:a040:197:22aa:804e:c312:1c2e:3b9e",
    "server":"LAPTOP-MJG5S0F3","os":"win32"
}

it( 'Disables the test button until the promise resolved', async () => {

    //Arrange
    axios.get.mockResolvedValueOnce( { data: MOCK_TEST_DETAILS } )
    render( 

        <TestDetailsProvider>
            
            <SpeedDetails/>

        </TestDetailsProvider>
    )

    //Act
    const testButton = screen.getByTestId( 'test-button' )
    fireEvent.click( testButton ) 
    
    //Assert
    expect( testButton.disabled ).toBe( true )    
    await waitFor( () => expect( testButton.disabled ).toEqual( false ) );

})