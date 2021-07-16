//useEffect monitora a mudança de uma variável e dispara uma função quando ela é alterada . Com ele você consegue pegar todos os ciclos de vida
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import * as S from './style';

export default function Respositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }else{
            history.push('/');
        }       
        //console.log(repositoriesName);
    }, []); //[] deve colocar as variáveis que quero monitorar porém está vazio por que quero que dispare assim que a página renderizar
    return(
        <S.Main>
            <S.Title>Repositório(s)</S.Title>
            <S.List>
                {
                    repositories.map(repository => {
                        return (
                            <S.ListItem>{repository}</S.ListItem>
                        )
                    })
                }
            </S.List>
            <S.LinkName to='/'>Voltar</S.LinkName>
        </S.Main>
    );
}