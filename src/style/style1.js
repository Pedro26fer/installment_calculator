import styled from "styled-components";


export const CenteredModal = styled.div`

    background-color: #fff;
    width: 57vw;
    height: 64vh;

    border-radius: 1%;
    box-sizing: border-box;
    box-shadow: 1px 2px 1px 1px rgba(50, 50, 50, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Notices = styled.div`

    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px;

    div{
    
        display: flex;
        padding-left: 10px;
        width: 100%;
        border-bottom: 1px solid #c3c3c3;
    }
    
    h2{
        font-size: 1rem;
        font-family: sans-serif;
        font-style: italic;
        text-transform: uppercase;
        color: #0080ca

    }

`