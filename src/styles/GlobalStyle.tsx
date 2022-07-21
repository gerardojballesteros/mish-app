import { createGlobalStyle } from 'styled-components';
import { devices } from './Device'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: rgb(26 25 31);
        font-family: 'Red Hat Display', sans-serif;
    }

    h1,h2,h3,h4,h5,h6,p,strong,a{
        color: #C2C6C5;
    }
    
    a{
        text-decoration: none;
    }

    .react-multiple-carousel__arrow{
        @media ${devices.laptop} {
            min-width: 55px!important;
            min-height: 55px!important;
        }
        @media ${devices.laptopL} {
            min-width: 65px!important;
            min-height: 65px!important;
        }
    
    }
    .react-multiple-carousel__arrow::before{
        @media ${devices.laptop} {
            font-size: 20px!important;
        }
        @media ${devices.laptopL} {
            font-size: 30px!important;
        }
    }

    .list-up{
        margin-top: -150px;
        margin-bottom: 10vw;
        @media ${devices.tablet} {
            margin-bottom: 23vw;
        }
        @media ${devices.laptop} {
            margin-bottom: 6vw;
        }
        @media ${devices.laptopL} {
            margin-bottom: 13vw;
        }
    }

    .banner-bottom{
        @media ${devices.laptopL} {
            margin-top: 13vw;
        }
    }

    .link-details{
        width: 100%;
        display: flex;
        height: 30px;
        justify-content: center;
        a{
            background: #EC1420;
            border-radius: 4px;
            border: 1px solid #EC1420;
            padding: 3px 10px;
            transition: .3s;
            &:hover{
                background: transparent;
                border: 1px solid #EC1420;
            }
        }
    }
    
    .backdrop{
        backdrop-filter: blur(20px);
        transition: .2s ease;
    }

`;

export { GlobalStyle };
