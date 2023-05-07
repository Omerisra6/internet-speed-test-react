import styled from "styled-components";

export const StyledLinesSpeedometer = styled.div`
    
    position: absolute;
    top: 100%;
    left: 50%;
    display: flex;
    align-items: center;
    rotate: -90deg;
    

    .short-speed-line, .long-speed-line{
        background-color: var( --lighter-theme );
    }

    .long-speed-line-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .short-speed-line, .long-speed-line-container {
        position: absolute;
        transform: rotate( calc( var( --i ) * var( --rot ) ) ) translateY( -18vw );
    }

    .long-speed-line-container > .speed-number{  

        font-size: var( --font-size-xs );
        color: var( --lighter-theme );
        position: absolute;
        rotate: calc( 90deg - ( var( --i ) * var( --rot ) ) ) ;
        top: calc( ( var( --i ) * 0.025vh ) + 4vh ) ;
        font-weight: bold;
    }

    .marked{
        animation: glow-orange 0.03s linear forwards;
        animation-delay: calc( var( --i ) * 0.05s );
    } 

    .loading{   
        --first-delay: 0.02s;
        --all-delay: calc( var( --first-delay ) * var( --lines-count ) );

        animation: load-orange var( --all-delay ) var( --first-delay )  linear infinite;
    }


    .marked-text{
        animation: glow-white 0.03s linear forwards;
        animation-delay: calc( var( --i ) * 0.05s );
    }

    .short-speed-line{
        width: 0.2vw;
        height: 1vw;
    }

    .long-speed-line{
        width: 0.4vw;
        height: 1.5vw;
    }

    @media ( max-width: 1100px ) {

        .short-speed-line, .long-speed-line-container {

            position: absolute;
            transform: rotate( calc( var( --i ) * var( --rot ) ) ) translateY( -200px );
        }
    }


    @media ( min-height: 1100px ) {

        .long-speed-line-container > .speed-number{  

            top: 10px;
            
        }
    }

    @media ( max-width: 640px ){

        .short-speed-line{
            width: 0.2vw;
            height: 1vw;
        }

        .long-speed-line{
            width: 0.4vw;
            height: 1.5vw;
        }   

        .short-speed-line, .long-speed-line-container {
            position: absolute;
            transform: rotate( calc( var( --i ) * var( --rot ) ) ) translateY( -100px );
        }

        .outside-speedometer-bar {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            align-items: center;
            rotate: -90deg;
        }

        .long-speed-line-container > .speed-number{  
            top: calc( ( var( --i ) * 0.025vh ) + 1vh ) ;
        }

    }

    @media ( max-width: 400px ){
        .short-speed-line, .long-speed-line-container {
            transform: rotate( calc( var( --i ) * var( --rot ) ) ) translateY( -80px );
        }
    }

    @keyframes glow-orange {
        0%{
            background: var( --lighter-theme );
            box-shadow: none;
        }
        100%{
            background: var( --orange-theme );
            box-shadow: 0 0 10px var( --orange-theme );
        }
    }

    @keyframes load-orange {
        0%{
            background: var( --orange-theme );
            box-shadow: 0 0 10px var( --orange-theme );
        }

        5%{
            background: var( --orange-theme );
            box-shadow: 0 0 10px var( --orange-theme );
        }

        95%{
            background: var( --lighter-theme );
            box-shadow: none;
        }

        100%{
            background: var( --orange-theme );
            box-shadow: 0 0 10px var( --orange-theme );
        }
    }

    @keyframes glow-white {
        0%{
            color: var( --lighter-theme );
        }
        100%{
            color: var( --white );
        }
    }

`