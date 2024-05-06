import "./App.css";
import "./Home.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Title from "./imgs/title.png";
import Logo from "./imgs/logo.png";
import Ufmg from "./imgs/ufmg.png";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export class Home extends Component {
   /* componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/user", { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } 
 */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="navbar-list">
              <NavLink className="btn" to="/Login">
                Conexão
              </NavLink>

              <NavLink className="btn" to="/Register">
                Criar Conta
              </NavLink>
            </div>
          </nav>
        </header>

        <div className="top-div-container">
          <div className="top-div">
            <img
              className="title-img"
              src={Title}
              alt="Nom du projet FonoTCS"
            />
          </div>
        </div>

        <img className="logo-img" src={Logo} alt="Logo du projet FonoTCS" />

        <div className="text">
          <p>
            FonoTCS est un test d'évaluation du raisonnement clinique en
            orthophonie, basé sur des cas présentés dans différents contextes
            (hôpitaux, cliniques et centres de santé primaires) qui intègrent
            des éléments d'incertitude. Ce test a été conçu pour évaluer les
            étudiants et les jeunes orthophonistes.
          </p>
        </div>

        <img className="ufmg-img" src={Ufmg} alt="Logo de l'UFMG" />
      </div>
    );
  }
}
