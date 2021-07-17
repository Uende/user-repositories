import { Color } from 'chalk';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Main = styled.div`
    box-sizing: border-box; 
    
    padding-bottom: 70px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 38px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 80px;
`;

export const List = styled.ul`
    list-style: none;
    color: white;
    font-family: 'Roboto';
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`;

export const ListItem = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    padding: 30px;
    margin-bottom: 30px;
    margin-right: 5%;
    border: 2px solid purple;

    &:hover{
        color: purple;
        cursor: context-menu;
    }

    @media(max-width: 850px){
        margin-left: -8%;
    }
`;

export const NoRepository = styled.h1`
    text-align: center;
    display: block;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin-bottom: 5%;
`;

export const LinkName = styled(Link)`
    text-align: center;
    display: block;
    color: white;
    font-size: 21px;
    text-decoration: none;
    padding: 15px;
    margin: 0 auto;
    background-color: purple;
    width: 15%;
    border-radius: 50px;

    @media(max-width: 850px){
        width: 35%;
    }
`;