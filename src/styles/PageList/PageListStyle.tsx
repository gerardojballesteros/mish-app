import styled from 'styled-components'

export const Page = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    padding: 100px 40px 0 40px;
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    margin: auto;
`
export const FilterContent = styled.div`
    margin: 40px 0;
`

export const MovieList = styled.div`
    margin-top: 30px;
`

export const Gender = styled.div`
    margin-top: 20px;
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    
    p{
        font-size: 18px;
        margin-bottom: 10px;
    }
   
`