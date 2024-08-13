import './App.css';
import './Global.css';
import './LoginRegister.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function Login() {
    const [currentUser, setCurrentUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const client = axios.create({
        baseURL: "https://fonotcs.medicina.ufmg.br/api"
    });

    function submitLogin(e) {
        e.preventDefault();
        client.post(
            "/login",
            {
                email: email,
                password: password
            },
            {
                withCredentials: true 
            }
        ).then(function (res) {
            setCurrentUser(true);
            console.log("Conectado");
        }).catch(function (error) {
            setCurrentUser(false);
            setError("Nome de usuário ou senha incorretos.");
            console.log("Não conectado");
        });

    }

    if (currentUser) {
        return <Navigate to="/tutorial" />; 
    }

    return (
        <div className='global login'>
            <div className='container form'>
                <h1>Login</h1>
                <hr />
                {error && <p className='error'>{error}</p>}
                <form onSubmit={e => submitLogin(e)}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /><br />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /> <p className='password-desc'>A senha deve possuir no mínimo 8 caracteres.</p><br />
                    <button className='btn form' type="submit">Conexão</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
