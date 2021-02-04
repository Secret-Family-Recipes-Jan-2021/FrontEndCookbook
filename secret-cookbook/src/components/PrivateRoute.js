import React from 'react';
import { Redirect } from 'react-router';

const PrivateRoute = (props) => {
  const token = localStorage.getItem('token');
  if (token) {
    return props.children;
  } else {
    return <Redirect to='/'/>
  }
};

export default PrivateRoute;