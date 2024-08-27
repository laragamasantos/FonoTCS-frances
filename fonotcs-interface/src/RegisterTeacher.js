import "./App.css";
import "./Global.css";
import "./LoginRegister.css";
import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function RegisterTeacher() {
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [classId, setClassId] = useState("");

  const client = axios.create({
    baseURL: "https://fonotcs.medicina.ufmg.br/api"
  });

  function submitRegistration(e) {
    e.preventDefault();

    let data = {
      email: email,
      username: username,
      password: password,
      classId: classId
    };
    
    client
      .post("/register/teacher", data)
      .then(function (res) {
        client
          .post("/login", {
            email: email,
            password: password,
          })
          .then(function (res) {
            setCurrentUser(true);
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
    return <Navigate to="/teacher-space" />;
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
