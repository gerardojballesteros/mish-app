import styled from "styled-components";

export const Button = styled.button`
    background: #EB1420;
    border: 1px solid #EB1420;
    color: #fff;
    border-radius: 5px;
    padding: 12px 50px;
    transition: .3s ease;
    cursor: pointer;
    &:hover{
        background: transparent;
        border: 1px solid #EB1420;
    }
`

export const ButtonGender = styled.button`
    background: transparent;
    border: 1px solid #EB1420;
    color: #fff;
    border-radius: 5px;
    padding: 8px 10px;
    transition: .3s ease;
    cursor: pointer;
    margin: 5px 4px;
 
    &:hover{
        background: #EB1420;
        border: 1px solid #EB1420;
    }
`
