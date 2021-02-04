import axios from 'axios';

// const baseUrl = "https://secret-cookbook-jan2021.herokuapp.com";
const baseUrl = 'https://cookbook-lambda.herokuapp.com';

export const login = async (username, password) => {
  const url = `${baseUrl}/users/login`;
  const res = await axios.post(url, {
    username,
    password
  })
  const token = res.data.token;
  console.log(token);
  localStorage.setItem('token', token)
};

export const register = async (username, password) => {
  const url = `${baseUrl}/users/register`;
  const res = await  axios.post(url, {
    username,
    password
  })
};