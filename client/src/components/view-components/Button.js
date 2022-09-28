import styled from 'styled-components'
import PropTypes from 'prop-types'


const sizesMap ={
    xxs: {
        fontSize: '--font-size-xxxs',
        width: '--width-xxs',
        height: '--height-xxs'
    },
    xs: {
        fontSize: '--font-size-xs',
        width: '--width-xs',
        height: '--width-xs'
    },
    sm: {
        fontSize: '--font-size-sm',
        width: '--width-sm',
        height: '--height-sm'
    },
    md: {
        fontSize: '--font-size-sm',
        width: '--width-md',
        height: '--height-md'
    },
    lg: {
        fontSize: '--font-size-lg',
        width: '--width-lg',
        height: '--height-lg'
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


export const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    width: var( ${ ( { size } ) => sizesMap[ size ].width } );
    height: var( ${ ( { size, circle  } ) => circle ? sizesMap[ size ].width : sizesMap[ size ].height } );
    color: var( ${ ( { color } ) => colorsMap[ color ].color } );
    font-size: var( ${ ( { size } ) => sizesMap[ size ].fontSize } );
    background-color: var( ${ ( { color } ) => colorsMap[ color ].background } );;
    border-radius: ${ ( { circle } ) => ! circle ? '0%' : '50%' };
    border: none;
`

Button.propTypes ={

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
        'red',
    ]),

    circle: PropTypes.oneOf([
        true,
        false,
    ])
}

