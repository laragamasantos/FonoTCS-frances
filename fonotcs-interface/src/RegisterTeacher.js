import "./App.css";
import "./Global.css";
import "./LoginRegister.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterTeacher() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [classId, setClassId] = useState("");

  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  function submitRegistration(e) {
    e.preventDefault();

    let data = {
      email: email,
      username: username,
      password: password,
      classId: classId,
    };

    client
      .post("/register/teacher", data)
      .then(function (res) {
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
            localStorage.setItem("isUserConnected", true);
          })
          .catch(function (error) {
            setCurrentUser(false);
            setError("erro");
          });
      })
      .catch(function (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.email
        ) {
          setError("Email já existente.");
        } else {
          setError("erro");
        }
      });
  }

  if (currentUser) {
    navigate('/teacher-space');
    window.location.reload();
  }

  return (
    <div className="global">
      <div className="container form">
        <h1>Criar conta</h1>
        <hr />
        {error && <p className="error">{error}</p>}
        <form onSubmit={(e) => submitRegistration(e)}>
          <input
            type="text"
            placeholder="Nome completo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
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

          <div>
            <input
              type="text"
              placeholder="Código da turma"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
            />
            <br />
          </div>
          <button className="btn form create-account" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterTeacher;
