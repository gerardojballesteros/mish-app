import styled from "styled-components";
import { devices } from '../../styles/Device';

export const List = styled.section`
    position: relative;
    width: 100%;
    height: 400px;
    z-index: 10;
    h1{
        padding-left: 50px;
        font-size: 30px;
        @media ${devices.mobile} {
            padding-left: 20px;
            font-size: 23px;
            padding-bottom: 10px;
           
        }
    }

`
export const Card = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 0px 10px;
    margin: 20px;
    border-radius: 20px;
    overflow: hidden;
    
    @media ${devices.mobile} {
        margin: 10px;
    }
    .card-content{
        
        img{
            width: 100%;
            object-fit: cover;
            border-radius: 20px;
            transition: all 0.5s linear;
        }
        
    }
`
export const Title = styled.h5`
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media ${devices.mobile} {
        font-size: 15px;
    }
`
export const Average = styled.div`
    position: absolute;
    background: #2f2d2d00;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(20px);
    margin: 0px 10px;
    top: 0;
    left: 0;
    padding: 15px 19px;
    border-radius: 20px 0px 35px 0px;
    color: white;

    @media ${devices.mobile} {
        padding: 10px 18px;
        font-size: 12px;
        border-radius: 20px 0px 20px 0px;
    }

    @media ${devices.tablet} {
        padding: 15px 20px;
        font-size: 12px;
        border-radius: 20px 0px 25px 0px;
    }

    @media ${devices.laptopL} {
        padding: 15px 21px;
        font-size: 13px;
        border-radius: 17px 0px 25px 0px;
    }
    
    @media ${devices.desktop} {
        padding: 16px 23px;
        font-size: 16px;
    }
    
    .fa-star{
        color: #f1df1f;
        margin-right: 5px;
    }
`