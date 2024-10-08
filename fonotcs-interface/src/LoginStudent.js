import "./App.css";
import "./Global.css";
import "./LoginRegister.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function LoginStudent() {
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classId, setClass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  function submitLogin(e) {
    e.preventDefault();

    client
      .post("/token/", {
        email: email,
        password: password,
      })
      .then(function (res) {
        const { access, refresh } = res.data;

        setCurrentUser(true);
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        localStorage.setItem("classId", classId);
        localStorage.setItem("isUserConnected", true);
      })
      .catch(function (error) {
        setCurrentUser(false);
        setError("Nome de usuário ou senha incorretos.");
      });
  }

  if (currentUser) {
    navigate('/tutorial');
    window.location.reload();
  }

  return (
    <div className="global login">
      <div className="container form">
        <h1>Login</h1>
        <hr />
        {error && <p className="error">{error}</p>}
        <form onSubmit={(e) => submitLogin(e)}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="password-desc">
            A senha deve possuir no mínimo 8 caracteres.
          </p>
          <br />
          <input
            type="text"
            placeholder="Código da turma"
            value={classId}
            onChange={(e) => setClass(e.target.value)}
          />
          <br />
          <button className="btn form" type="submit">
            Conexão
          </button>
          <p>
            Não possui uma conta? <a href="/register-student">Criar conta</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginStudent;
