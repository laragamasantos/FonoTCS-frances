import "./App.css";
import "./Global.css";
import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TutorialImg from "./imgs/tutorial.png";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function Tutorial() {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
  });
  
  useEffect(() => {
    client.get("/user")
        .then(function (res) {
        })
        .catch(function (error) {
        });
  }, []);

  const handleStartTest = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="global">
      <div className="container">
        <h1>Objetivos e instruções</h1>

        <p>
          O FonoTCS é um teste de avaliação de raciocínio clínico em
          Fonoaudiologia, baseado em casos apresentados em diferentes cenários
          (hospitais, clínicas e Unidades Básicas de Saúde) que incorporam
          elementos de incerteza. Este teste foi concebido para a avaliação de
          estudantes e jovens fonoaudiólogos. Veja o exemplo na imagem abaixo:
        </p>

        <img className="img" src={TutorialImg} alt="Imagem do tutorial" />

        <p>
          Para a realização do teste, você precisa seguir estes quatro passos:
        </p>

        <p>
          <strong>1º passo –</strong> leia o cenário da questão (descrição da
          situação clínica) e depois os itens apresentados em três partes
          distintas;
        </p>
        <p>
          <strong>2º passo –</strong> leia a parte ("se você está pensando em")
          que aborda uma decisão clínica;
        </p>
        <p>
          <strong>3º passo –</strong> analise a parte ("e você encontra") que
          introduz um achado clínico; condição pré-existente; imagem
          diagnóstica; ou resultado de exame/teste.
        </p>
        <p>
          <strong> 4º passo – </strong>definida, em uma escala de cinco pontos
          variando de -2 a +2, o impacto da nova descoberta ("e você encontra")
          na sua decisão clínica ("se você está pensando em") a partir da
          pontuação da escala (“a hipótese se torna”).
        </p>
        <p> Desejamos um excelente teste!</p>
        <NavLink
          className="btn form"
          to={`/case/1`}
          onClick={handleStartTest}
        >
          Iniciar teste
        </NavLink>
      </div>
    </div>
  );
}

export default Tutorial;
