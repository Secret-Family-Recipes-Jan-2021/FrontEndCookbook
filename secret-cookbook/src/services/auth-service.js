import axios from 'axios';

export const baseUrl = 'https://cookbook-lambda.herokuapp.com';

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

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
