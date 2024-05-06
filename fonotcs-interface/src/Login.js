import './App.css';
import './Global.css';
import './Login.css';
import React, { useState, useEffect } from 'react';
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

/*     useEffect(() => {
        client.get("/user")
            .then(function (res) {
                setCurrentUser(true);
            })
            .catch(function (error) {
                setCurrentUser(false);
            });
    }, []); */

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
            console.log("Connecté");
        }).catch(function (error) {
            setCurrentUser(false);
            setError("Nom d'utilisateur ou mot de passe incorrect.");
            console.log("Non connecté");
        });

    }

    if (currentUser) {
        return <Navigate to="/case/1" />; 
    }

    return (
        <div className='global login'>
            <div className='container login'>
                <h1>Connexion</h1>
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
                        placeholder="Mot de passe"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /> <p className='login_desc'>Le mot de passe doit contenir au moins 8 caractères.</p><br />
                    <button className='btn form' type="submit">Connexion</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
