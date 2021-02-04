import React, { useState } from 'react';
import { login } from '../services/auth-service';
import { useHistory } from 'react-router-dom';

const RecipeLogin = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const history = useHistory(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('login')
    await login(userName, passWord);
    history.push('/recipes');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input value={userName} onChange={e=>setUserName(e.target.value)} placeholder='Username'></input>
        <input value={passWord} onChange={e=>setPassWord(e.target.value)} placeholder='Password'></input>
        <button>Login</button>
      </form>
    </div>
  )
};

export default RecipeLogin;