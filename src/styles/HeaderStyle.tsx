import styled from 'styled-components';
import { devices } from './Device';

export const MyHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    z-index: 999999;
    background: rgb(245,245,245);
    background: linear-gradient(360deg, rgba(245,245,245,0) 0%, rgba(0,0,0,1) 100%);
    @media ${devices.mobile} {
       padding: 0 15px;
    }
`

export const HeaderTitle = styled.h1`
    font-weight: 700;
    font-size: 30px;
    color: #C2C6C5;
`

export const Nav = styled.ul`
    display: flex;
    list-style: none;
    height: 60px;
    align-items: center;
    position: relative;
    z-index: 111;
    li{
        padding: 0 20px;
        @media ${devices.mobile} {
            padding: 0 10px;
        }
        a{
            text-decoration: none;
            font-weight: 400;
            transition: .3s ease;
            &:hover{
                color: #fff;
            }
        }
        i{
            font-size: 30px;
        }
    }
`


