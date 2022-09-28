import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Speedometer from './Speedometer';
import { AppAttributesProvider } from '../../../../contexts/appAttributes'
import { TestDetailsProvider } from '../../../../contexts/testDetails'

it( 'Renders with a forwards animation class name if loading is false', () => {
    
    //Arrange
    render( 

        <TestDetailsProvider>

            <AppAttributesProvider value={ { error: false, loading: true } }>

                <Speedometer/>

            </AppAttributesProvider>
            
        </TestDetailsProvider>
    )
    
    //Assert
    const insideSpeedometerBar = screen.getByTestId( 'inside-speedometer-bar' )
    expect( insideSpeedometerBar ).toHaveClass( 'loading-animation' )

})


it( 'Renders with a loading animation class name if loading is true', () => {
    
    //Arrange
    render( 

        <TestDetailsProvider>

            <AppAttributesProvider value={ { error: false, loading: false } }>

                <Speedometer/>

            </AppAttributesProvider>
            
        </TestDetailsProvider>
    )
    
    //Assert
    const insideSpeedometerBar = screen.getByTestId( 'inside-speedometer-bar' )
    expect( insideSpeedometerBar ).toHaveClass( 'forwards-animation' )

})