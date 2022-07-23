import styled from 'styled-components'
import { devices } from '../Device'

export const FooterContent = styled.footer`
    margin-top: 160px;
    position: relative;
    width: 100%;
    height: auto;
    padding: 20px 20px;
    color: white;
    z-index: 999;
    background: #000000;
    display: flex;
    justify-content: space-between;
    @media ${devices.mobile} {
        display: block;
        text-align: center;
        font-size: 13px;
    }
    #link-footer{
        transition: .3s ease;
        color: #747373;
        font-weight: 600;
        img{
            width: 100px;
        }
        &:hover{
            color: #EC1420;
        }
    }
`