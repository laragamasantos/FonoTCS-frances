import './App.css';
import './Global.css';
import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Register() {
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
  
  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function (res) {
      client.post(
        "/login",
        {
          email: email,
          password: password
        }
      ).then(function (res) {
        setCurrentUser(true);
      });
    }).catch(function (error) {
      if (error.response && error.response.data && error.response.data.email) {
        setError('Email already exists.');
      } else {
        setError('Email já existe.');
      }
    });
  }

  if (currentUser) {
    return <Navigate to="/case1" />; 
  }

  return (
    <div className='global register'>
      <div className='container register'>
        <h1>Register</h1>
        <hr />
        {error && <p className='error'>{error}</p>}
        <form onSubmit={e => submitRegistration(e)}>
          <input type="text" placeholder="Full Name" value={username} onChange={e => setUsername(e.target.value)} /><br />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
          <p className='login_desc'>A senha deve conter pelo menos 8 caracteres.</p><br />
          <button className='btn form' type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
