import React, {useState} from 'react';
import axios from 'axios';
//Com o History você consegue controlar a página que você está, mudá-la e etc
import { useHistory } from 'react-router-dom';
import * as S from './style';

function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [erro, setErro] = useState(false)
  localStorage.setItem('user', user);
  function search() {
  axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
    const respositories = response.data;
    const repositoriesName = [];
    respositories.map((repository) => {
      repositoriesName.push(repository.name);
    });
    setErro(false)
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    //Chamando a url de repositórios
    history.push('/repositories')
    
  }).catch( () => {
    setErro(true)
  })

  };

  return (
    <S.Main>
      <S.Container>
      <S.Text>De quem você quer ver o(s) repositório(s)? <S.NameUser>{user}</S.NameUser></S.Text>
      <S.Input className='userInput' placeholder='Enter the username' onChange={e => setUser(e.target.value)}/>
      <S.Button type='button' onClick={search}>Search</S.Button>
      </S.Container>
      { erro ? <S.errorMsg>O usuário não existe, verifique se o nome está correto</S.errorMsg> : ''}
    </S.Main>
  );
}

export default Home;
