import styled from 'styled-components';
import { devices } from '../Device';

export const Page = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 60px;

`
export const ImagePoster = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40vw;
    object-fit: cover;
    @media ${devices.mobile} {
       height: 75vh;
    }
    @media ${devices.tablet} {
       height: 75vh;
    }
    @media ${devices.laptop} {
       height: 60vh;
    }
`

export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40vw;
    border: 0px;
    background: rgb(26,25,31);
    background: linear-gradient(180deg, rgba(26,25,31,0.5284488795518207) 0%, rgba(26,25,31,1) 100%);
    @media ${devices.mobile} {
       height: 75vh;
    }
    @media ${devices.tablet} {
       height: 75vh;
    }
    @media ${devices.laptop} {
       height: 60vh;
    }
`

export const Description = styled.div`
    position: relative;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: auto;
    z-index: 1;
    padding: 140px 90px 0 90px;
    @media ${devices.mobile} {
        padding: 140px 20px 0 20px;
    }
`

export const ImageFront = styled.img`
   width: 100%;
   max-width: 260px;
   border-radius: 15px;
   @media ${devices.mobile} {
       display: none;
    }
    @media ${devices.tablet} {
        display: block;
    }
`

export const BoxOne = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: .4fr 1fr;
    @media ${devices.mobile} {
       display: block;
    }
    @media ${devices.tablet} {
       display: block;
    }
    @media ${devices.laptop} {
       display: grid;
   }
`
export const TextContent = styled.div`
    
    @media ${devices.mobile} {
        margin-top: 300px;
        padding: 0px;
    }
    @media ${devices.tablet} {
        padding: 0 0px;
    }
    @media ${devices.laptop} {
        padding: 0 30px;
    }
    h1{
        font-size: 3rem;
        font-weight: 400;
        color: #fff;
        @media ${devices.mobile} {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
        }
    }
    
    .date-categories{
        font-weight: 400;
        color: white;
        font-size: .9rem;
        display: flex;
        height: 30px;
        @media ${devices.mobile} {
            margin-top: 10px;
            flex-direction: column;
            align-items: center;
        }
        .date-time{
            display: flex;
            p{
                margin-right: 8px;
            }
        }
        i{
            position: relative;
            top: 5px;
            font-size: .5rem;
            margin: 0 10px;
            @media ${devices.mobile} {
                display: none;
            }
        }
        .tags{
            display: flex;
            .categories{
                margin-right: 8px;
            }
        }
  
    }
    

`
export const Average = styled.div`
    display: flex;
    align-items: center;
    @media ${devices.mobile} {
        margin-top: 40px;
    
    }
    .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 15px;
        border-radius: 10px;
        background: #ffffff10;
        backdrop-filter: blur(10px);
        @media ${devices.mobile} {
            padding: 8px 50px;
        }
        p{
            font-weight: 600;
            color: white;
        }
        i{
            margin-left: 3px;
            color: #F2E01F;
        }
        @media ${devices.mobile} {
            width: 60px;
            height: 40px;
        }
    }
    .title-average{
        font-weight: 600;
        font-size: 1rem;
        color: white;
        margin-left: 10px;
    }
`

export const TextDescription = styled.aside`
    width: 100%;
    height: auto;
    max-width: 600px;
    margin-top: 20px;
`

export const Production = styled.aside`
    width: 100%;
    height: auto;
    margin-top: 20px;
    h3{
        color: white!important;
        margin-bottom: 10px;
    }
    div{
        display: flex;
        margin-right: 10px;
        @media ${devices.mobile} {
            flex-direction: column;
            margin: 3px 0;
        }
    }
`

export const BoxTwo = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 2.4fr 1fr;
    @media ${devices.mobile} {
        display: block;
        margin-top: 0%;
    }
    @media ${devices.tablet} {
        display: block;
        margin-top: 0%;
    }
    @media ${devices.laptop} {
        margin-top: 50px;
        display: grid;
    }
`

export const ImagesOther = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media ${devices.mobile} {
        display: block;
    }
    @media ${devices.tablet} {
        display: block;
    }
    @media ${devices.laptop} {
        display: grid;
    }
    
    img{
        border-radius: 15px;
        object-fit: cover;
        @media ${devices.mobile} {
            width: 100%;
            height: 300px;
            left: 0;
            top: 0;
            margin: 10px 0;
        }
        @media ${devices.tablet} {
            width: 100%;
            height: 400px;
            left: 0;
            top: 0;
            margin: 10px 0;
        }
        &:nth-child(1){
            @media ${devices.laptop} {
                grid-column: 1/3;
                width: 100%;
                max-width: 900px;
                height: 400px;
            }
        }
        &:nth-child(2){
            @media ${devices.laptop} {
                grid-column: 2/2;
                grid-row: 2;
                width: 300px;
                height: 160px;
                position: relative;
                top: -50px;
                left: 120px;
            }
        }
        &:nth-child(3){
            @media ${devices.laptop} {
                grid-column: 2/2;
                grid-row: 2;
                width: 300px;
                height: 160px;
                position: relative;
                top: -50px;
                left: -220px;
            }
        }
    }
`
export const TextState = styled.div`
    grid-column: 2/3;
    grid-row: 1;
    position: relative;
    padding: 30px;
    @media ${devices.mobile} {
        padding: 0;
    }
    @media ${devices.tablet} {
        padding: 0px;
    }
    @media ${devices.laptop} {
        padding: 30px;
    }
`

export const Items = styled.ul`
    list-style: none;
    margin-top: 10px;
    @media ${devices.mobile} {
        margin-bottom: 40px;
    }
    li{
        margin-bottom: 10px;
        h3{
            color: white;
            @media ${devices.mobile} {
                margin-bottom: 10px;
            }
        }
    }
`