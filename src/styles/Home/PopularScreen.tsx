import styled from 'styled-components'
import { devices } from '../../styles/Device'


const PopularScreen = styled.section`
    position: relative;
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${devices.mobile} {
        background-position-x: 50%;
        height: 750px;
    }
    @media ${devices.laptopL} {
        height: 800px;
    }
    @media ${devices.desktop} {
        height: 1000px;
    }
    
`

const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    background: linear-gradient(89deg,rgb(25 24 30) 0%,rgb(44 40 46 / 0%) 130%);
    @media ${devices.mobile} {
        height: 750px;
    }
    @media ${devices.laptopL} {
        height: 800px;
    }
    @media ${devices.desktop} {
        height: 1000px;
    }
    
`

const Description = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
    max-width: 700px; 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    padding-left: 80px;
    padding-bottom: 90px;
    .now-title{
        font-size: 30px;
        margin-bottom: 16px;
    }

    @media ${devices.mobile} {
        height: 750px;
        padding: 20px;
        padding-bottom: 110px;
        padding-left: 30px;
    }
    @media ${devices.tablet} {
        height: 800px;
        padding-bottom: 150px;
        padding-left: 80px;
    }
    @media ${devices.desktop} {
        height: 1000px;
        padding-bottom: 150px;
    }
    
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 60px;
    line-height: 55px;
    @media ${devices.mobile} {
        font-size: 39px;
        line-height: 40px;
        font-weight: 700;
    }
    p{  
        font-size: 30px;
        font-weight: 300;
        margin-top: -5px;
        @media ${devices.mobile} {
            margin-top: 5px;
        }
    }
`

const Overview = styled.p`
    margin: 15px 0px 30px 0px;
    font-size: 16px;
    font-weight: 300;
`

export { Bg, Description, Title, PopularScreen, Overview };