import styled from "styled-components";

export const StyledSpeedometer = styled.div`
    
    @property --percentage {
        syntax: '<number>';
        inherits: true;
        initial-value: 0;
    }

    @keyframes progress {
        0% {
            --percentage: 0;
        }

        100% {
            --percentage: var( --value );
        }
    }

    @keyframes progress-back-and-forwards{

        0% {
            --percentage: 0;
        }

        50%{
            --percentage: 100;
        }

        100% {
            --percentage: 0;
        }
    }

    

    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate( -50%, -50% );
    

    .inside-speedometer-bar {

        width: 28vw;
        min-width: 300px;
        aspect-ratio: 2 / 1;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .inside-speedometer-bar::before {

        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: conic-gradient( from 0.75turn at 50% 100%, var( --orange-theme ) calc( var( --percentage ) * 1% / 2 ), var( --dark-blue ) 0 );
        mask: radial-gradient(at 50% 100%, white 68%, transparent 0);
        mask-mode: alpha;
        -webkit-mask: radial-gradient(at 50% 100%, #0000 68%, #000 0);
        -webkit-mask-mode: alpha;
        border-radius: 50% / 100% 100% 0 0;
    }

    .loading-animation{

        --line-delay-ms: calc( var( --line-delay ) * 0.001s );
        --circle-duration: calc( var( --line-delay-ms ) * var( --lines-count ) * 2 );
        animation: progress-back-and-forwards var( --circle-duration ) linear infinite;
    }

    .forwards-animation{
        
        animation: progress 2s 0.05s forwards;
    }

    .speedometer-background{

        z-index: -110;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50%);
        width: 550px;
        height: 550px;
        background: rgb(10,11,59);
        background: radial-gradient(circle, rgb(12, 13, 61) 39%, rgba(7,8,56,1) 100%);
        border-radius: 50%;
        border: 2px solid #0c0c41;
    }

    .speedometer-background::after{

        content: "";
        z-index: -100;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50%);
        width: 280px;
        height: 280px;
        background: rgb(10,11,59);
        background: radial-gradient(circle, rgba(10,11,59,1) 39%, rgba(7,8,56,1) 100%);
        border-radius: 50%;
        border: 2px solid #0d0d46;
    }

    .speedometer-background::before{

        content: "";
        z-index: -120;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50%);
        width: 420px;
        height: 420px;
        background: rgb(10,11,59);
        background: radial-gradient(circle, rgb(12, 13, 61) 39%, rgba(7,8,56,1) 100%);
        border-radius: 50%;
        border: 2px solid #0c0c41;
    }

    @media ( max-width: 640px ){

        .speedometer-background{

            width: 275px;
            height: 275px;
        }
        
        .speedometer-background::after{
        
            width: 140px;
            height: 140px;
        }
        
        .speedometer-background::before{

            width: 210px;
            height: 210px;
        }

        .inside-speedometer-bar{
            width: 0;
            min-width: 0;
        }

        
    }


`