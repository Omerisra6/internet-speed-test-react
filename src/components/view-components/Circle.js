import styled from 'styled-components'
import PropTypes from 'prop-types'


const sizesMap ={
    xxs: {
        fontSize: '--font-size-xxxs',
        width: '--width-xxs',
        height: '--width-xxs'
    },
    xs: {
        fontSize: '--font-size-xs',
        width: '--width-xs',
        height: '--width-xs'
    },
    sm: {
        fontSize: '--font-size-sm',
        width: '--width-sm',
        height: '--width-sm'
    },
    md: {
        fontSize: '--font-size-sm',
        width: '--width-md',
        height: '--width-md'
    },
    lg: {
        fontSize: '--font-size-lg',
        width: '--width-lg',
        height: '--width-lg'
    },
}

const colorsMap ={

    dark: {
        color: '--black',
        background: '--white',
    },
    light : {
        color: '--black',
        background: '--light-grey',
    },
    white: {
        color: '--white',
        background: '--black',
    },
    theme: {
        color: '--orange-theme',
        background: '--dark-blue',
    },
    red:{
        color: '--white',
        background: '--red',
    }
    
}


export const Circle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: var( ${ ( { size } ) => sizesMap[ size ].width } );
    height: var( ${ ( { size } ) => sizesMap[ size ].height } );
    color: var( ${ ( { color } ) => colorsMap[ color ].color } );
    font-size: var( ${ ( { size } ) => sizesMap[ size ].fontSize } );
    background-color: var( ${ ( { color } ) => colorsMap[ color ].background } );;
    border-radius: 50%;
`

Circle.propTypes ={

    size: PropTypes.oneOf([
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
    ]),

    color: PropTypes.oneOf([
        'dark',
        'light',
        'white',
        'theme',
        'red'
    ]),
}

