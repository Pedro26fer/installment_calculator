import styled from "styled-components"


export const Notices = styled.div`

    width: 80%;
    height: 80%;

    display: flex;
    align-items: center;
    padding: 35px;

    div{
    
        display: flex;
        flex-direction: column;
        width: 100%;
        
    }
    
    h2{
        font-size: 1rem;
        font-family: sans-serif;
        font-style: italic;
        text-transform: uppercase;
        color: #0080ca;
        padding-bottom: 10px;
        padding-right: 60px;
        border-bottom: 1px solid #c3c3c3;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    li{
        display: flex;
        gap: 3px;
        color: #0080ca;
        font-size: 1.2rem;
        font-style: italic;
    }

    span{
        color: #0060ca;
        font-weight: 600
    }

`