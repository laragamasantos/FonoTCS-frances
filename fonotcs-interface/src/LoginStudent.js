import './App.css';
import './Global.css';
import './LoginRegister.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function LoginStudent() {
    const [currentUser, setCurrentUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [classId, setClass] = useState('');
    const [error, setError] = useState('');

    const client = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
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
            localStorage.setItem('classId', classId);
            localStorage.setItem('isUserConnected', true);
        }).catch(function (error) {
            setCurrentUser(false);
            setError("Nome de usuário ou senha incorretos.");
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
                    <input
                        type="text"
                        placeholder="Código da turma"
                        value={classId}
                        onChange={e => setClass(e.target.value)}
                    /><br />
                    <button className='btn form' type="submit">Conexão</button>
                    <p>Não possui uma conta? <a href='/register-student'>Criar conta</a></p>
                </form>
            </div>
        </div>
    )
}

export default LoginStudent;
