import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const sizeMap = {
    'sm':{
        'size': '--size-sm'
    },
    'md':{
        'size': '--size-md'
    },
    'lg':{
        'size': '--size-lg'
    }
}

const StyledLogo = styled.div`

    --size-sm: '0.8vw';
    --size-md: '1vw';
    --size-lg: '1.2vw';

    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: var( --theme );
    font-size: var( ${ ( { size } ) => sizeMap[ size ].size  } );
    font-weight: bold;
    
    & > .logo-pro-text{

        color: var( --white );
    }

    & > .logo-earth-text{

        color: var( --orange-theme );
    }

`

StyledLogo.propTypes ={
    size: PropTypes.oneOf([
        'sm',
        'md',
        'lg',
    ]),
}

export default function Logo( { size } ) {


    return(
        <StyledLogo size={ size }>

            <span className='logo-pro-text'>PRO</span>
            <span className='logo-earth-text'>EARTH</span>

        </StyledLogo>
    )
}
