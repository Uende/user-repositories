import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    display: block;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 850px){
        display: inline-block;
        margin-top: 50%;
        height: 62vh;
    }
`;

export const Text = styled.h1`
    width: 25%;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    margin-right: 8%;
    @media(max-width: 850px){
        width: 100%;
        margin-bottom: 10%;
    }
`;

export const NameUser = styled.h1`
    color: purple;
    font-size: 25px;
`;

export const Input = styled.input`
    width: 35%;
    height: 33.5px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto', sans-serif;

    &:hover{
        border: none; 
    }
    &::placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    &:focus{
        box-shadow: none;
        outline: none;
    }
    &:empty{
        color: purple;
        font-size: 18px;
    }
    @media(max-width: 850px){
        width: 60%;
    }
`;

export const Button = styled.button`
    background-color: purple;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px ;
    margin-left: -1%;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 600;
    width: 25%;
    height: 54px;
    padding: 10px;
    border: none;

    &:hover, &:focus{
        cursor: pointer;
    }

    @media(max-width: 850px){
        width: 30%;
    }
`;

export const errorMsg = styled.span`
    color: red;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-top: -10%;
    margin-bottom: 10%;
    width: 100%;
    text-align: center;

    @media(max-width: 850px){
        margin-top: -35%;
        margin-bottom: 20%;
        font-size: 15px;
    }
`;