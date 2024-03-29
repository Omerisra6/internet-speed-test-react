import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const sizesMap ={ 
    xs: {
        fontSize: '--font-size-sm',
    },
    sm: {
        fontSize: '--font-size-sm',
    },
    md: {
        fontSize: '--font-size-md',
    },
    lg: {
        fontSize: '--font-size-lg',
    },
}

const colorsMap ={

    dark: {
        color: '--theme',
        backgroundHover: '--lighter-theme',
    },
    light : {
        color: '--light-grey',
        backgroundHover: '--orange-theme',
    },
    white: {
        color: '--white',
        backgroundHover: '--theme',
    },
    theme: {
        color: '--lighter-theme',
        backgroundHover: '--orange-theme',
    },
    orange: {
        color: '--orange-theme',
        backgroundHover: '--orange-theme',
    },
    
}


const StyledLink = styled.a`
    
    background-color: inherit;

    & > .link-icon{

        font-size: var( ${ ( { size } ) => sizesMap[ size ].fontSize } );
        cursor: pointer;
        color: var( ${ ( { color } ) => colorsMap[ color ].color } );
    }

    &:hover > .link-icon{

        color: var( ${ ( { color } ) => colorsMap[ color ].backgroundHover } );
    }
`

StyledLink.propTypes ={

    size: PropTypes.oneOf([
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
        'orange',
    ]),
}

export default function Link( { icon, size, color, url } ) {


    return (
        <StyledLink href={ url } size={ size } color={ color } >

            <span className='material-icons link-icon'>{ icon }</span>

        </StyledLink>
    )
}
