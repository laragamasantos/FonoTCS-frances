import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Tutorial from "./Tutorial";
import { Case } from "./Case";
import { CaseManager } from "./CaseManager";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import LogoHeader from "./imgs/logo-header.png";
import React, { Component } from "react";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      caseCount: 0,
      cases: [],
      questions: [],
    };
  }

  componentDidMount() {
    axios.get('https://fonotcs.medicina.ufmg.br/api/cases')
      .then(response => {
        console.log(response);
        this.setState({ cases: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('https://fonotcs.medicina.ufmg.br/api/questions')
      .then(response => {
        console.log(response);
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createCase = (caseObj) => {
    const filteredQuestions = this.state.questions.filter(
      (quest) => quest.case_id === caseObj.id
    );
    const routePath = `/case/${caseObj.id}`;
    return (
      <Route
        key={caseObj.id}
        path={routePath}
        element={
          <Case
            case={caseObj}
            questions={filteredQuestions}
            handleResponseChange={this.handleResponseChange}
          />
        }
        exact
      />
    );
  };

  createCases = (cases) => {
    return cases.map(this.createCase);
  };

  handleResponseChange = (value) => {
    const floatValue = parseFloat(value);

    this.setState((prevState) => ({
      totalScore: prevState.totalScore + floatValue,
      caseCount: prevState.caseCount + 1,
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <img
          className="logo-header-img"
          src={LogoHeader}
          alt="FonoTCS logo and name"
        />
        <Routes>
          <Route path="/" element={<Home />} exact />
          {this.state.cases.length > 0 &&
            this.state.questions.length > 0 &&
            this.createCases(this.state.cases)}
          <Route
            path="/casemanager"
            element={
              <CaseManager
                totalScore={this.state.totalScore}
                caseCount={this.state.caseCount}
              />
            }
            exact
          />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/tutorial" element={<Tutorial />} exact />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
