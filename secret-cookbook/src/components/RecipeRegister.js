import React, { useState } from 'react';
import { register } from '../services/auth-service';
import { useHistory } from 'react-router-dom';

const RecipeRegister = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const history = useHistory(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('handleRegister')
    await register(userName, passWord);
    history.push('/users/login');
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input value={userName} onChange={e=>setUserName(e.target.value)} placeholder='Username'></input>
        <input value={passWord} onChange={e=>setPassWord(e.target.value)} placeholder='Password'></input>
        <button>Register</button>
      </form>
    </div>
  )
};

export default RecipeRegister;