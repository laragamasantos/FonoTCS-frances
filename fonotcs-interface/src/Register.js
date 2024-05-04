import "./App.css";
import "./Global.css";
import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Register() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Masculino");
  const [age, setAge] = useState("");
  const [highestDegree, setHighestDegree] = useState("Graduação em curso");
  const [conclusionYear, setConclusionYear] = useState("");
  const [error, setError] = useState("");
  const [classId, setClassId] = useState("");

  const client = axios.create({
    baseURL: "https://fonotcs.medicina.ufmg.br/api"
  });

  function submitRegistration(e) {
    e.preventDefault();
    let endpoint = isTeacher ? "/register/teacher" : "/register/student";

    let data = {
      email: email,
      username: username,
      password: password,
      isTeacher: isTeacher,
    };

    if (isTeacher) {
      data.classId = classId;
    } else {
      data.gender = gender;
      data.age = age;
      data.highestDegree = highestDegree;
      data.conclusionYear = conclusionYear;
    }
    console.log(data);

    client
      .post(endpoint, data)
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
    return <Navigate to="/case/1" />;
  }

  return (
    <div className="global register">
      <div className="container register">
        <h1>Criar conta</h1>
        <hr />
        {error && <p className="error">{error}</p>}
        <form onSubmit={(e) => submitRegistration(e)}>
          <label>
            <input
              type="checkbox"
              checked={isTeacher}
              onChange={(e) => setIsTeacher(e.target.checked)}
            />{" "}
            Sou professor?{" "}
          </label>
          <br />
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
          <br />
          <p className="login_desc">
            A senha deve possuir no mínimo 8 caracteres.
          </p>
          <br />

          {isTeacher ? (
            <div>
              <input
                type="text"
                placeholder="Código da turma"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
              />
              <br />
            </div>
          ) : (
            <div>
              <label>
                Gênero: &nbsp;
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Não binário">Não binário</option>
                </select>
              </label>
              <br />
              <br />
              <input
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
                placeholder="Idade"
                maxLength={2}
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/\D/g, ""))}
              />
              <br />
              <br />
              <label>
                Maior titulação acadêmica: &nbsp;
                <select
                  gender={highestDegree}
                  onChange={(e) => setHighestDegree(e.target.value)}
                >
                  <option value="Graduação em curso">Graduação em curso</option>
                  <option value="Graduação completa">Graduação completa</option>
                  <option value="Especialização">Especialização</option>
                  <option value="Mestrado">Mestrado</option>
                  <option value="Doutorado">Doutorado</option>
                </select>
              </label>
              <br />
              <br />
              <input
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
                placeholder="Ano de conclusão"
                maxLength={4}
                value={conclusionYear}
                onChange={(e) =>
                  setConclusionYear(e.target.value.replace(/\D/g, ""))
                }
              />
              <br />
            </div>
          )}
          <button className="btn form" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
