import React, {useState} from 'react';
import axios from 'axios';
//Com o History você consegue contrar a página que você está, mudá-la e etc
import { useHistory } from 'react-router-dom';
import * as S from './style';

function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  localStorage.setItem('user', user);
  function search() {
  axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
    const respositories = response.data;
    const repositoriesName = [];
    respositories.map((repository) => {
      repositoriesName.push(repository.name);
    });
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    if(repositoriesName != null){
      alert('O(s) respositório(s) do usuário foi encontrado com sucesso!')
      history.push('/repositories')
    }else{
      alert('O usuário não foi encontrado ou não possui repositório')
    }
    //Chamando a url de repositórios
    
  });

  };

  return (
    <S.Main>
      <S.Text>De quem você quer ver o(s) repositório(s)? <S.NameUser>{user}</S.NameUser></S.Text>
      <S.Input className='userInput' placeholder='Enter the username' onChange={e => setUser(e.target.value)}/>
      <S.Button type='button' onClick={search}>Search</S.Button>
    </S.Main>
  );
}

export default Home;
