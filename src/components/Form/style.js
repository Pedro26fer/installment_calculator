import styled from "styled-components";

export const StyledForm = styled.form`


    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;
    padding-left: 6rem;

    background-color: #fff;


    width: 55%;
    height: 90%;

    div{
        display: flex;
    }

    h2{
        color: #1f1f1f;
        font-family: sans-serif;

        font-size: 1.5rem;
        font-weight: 600;
    }    


    label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;

        
        color: #a1a1a1;
        font-size: 1rem;
        font-weight: 500;

        input{
            padding:12px ;
            width: 60%;
            height: 1rem;

            :focus{
                outline-style: solid;
                outline-color: #0095fa;
            }

            border-radius: 4%;
            border: 2px solid;
            border-color: #e3e3e3
        }

        span{
            font-size: 0.7rem;
            color: #b9b9b9;
        }
    }

    
`