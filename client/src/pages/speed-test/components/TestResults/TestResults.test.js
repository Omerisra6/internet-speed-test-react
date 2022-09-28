import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import TestResults from './TestResults';
import { AppAttributesProvider } from '../../../../contexts/appAttributes'
import { TestDetailsProvider } from '../../../../contexts/testDetails'

it( 'Shows loading text when waiting for server response', () => {
    
    //Arrange
    render( 

        <TestDetailsProvider>

            <AppAttributesProvider value={ { error: false, loading: true } }>

                <TestResults/>

            </AppAttributesProvider>
            
        </TestDetailsProvider>
    )
    
    //Assert
    const speedResultText = screen.getByTestId( 'downloadSpeed' )
    expect( speedResultText ).toHaveTextContent( 'Testing...' )

})

it( 'Shows Error text when error is thrown', () => {
    
    //Arrange
    render( 

        <TestDetailsProvider>

            <AppAttributesProvider value={ { error: true, loading: false } }>

                <TestResults/>

            </AppAttributesProvider>
            
        </TestDetailsProvider>
    )
    
    //Assert
    const speedResultText = screen.getByTestId( 'downloadSpeed' )
    expect( speedResultText ).toHaveTextContent( 'No connection' )

})