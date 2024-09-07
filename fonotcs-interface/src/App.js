import "./App.css";
import LoginStudent from "./LoginStudent";
import LoginTeacher from "./LoginTeacher";
import RegisterStudent from "./RegisterStudent";
import RegisterTeacher from "./RegisterTeacher";
import Tutorial from "./Tutorial";
import { Case } from "./Case";
import { CaseManager } from "./CaseManager";
import { Home } from "./Home";
import { TeacherSpace } from "./TeacherSpace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import LogoHeader from "./imgs/logo-header.png";
import React, { Component } from "react";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      caseCount: 0,
      cases: [],
      questions: [],
      isUserConnected: false,
    };
  }

  componentDidMount() {
    this.clearStorage();

    client
      .get("/cases")
      .then((response) => {
        this.setState({ cases: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    client
      .get("/questions")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clearStorage() {
    let session = sessionStorage.getItem("register");

    if (session == null) {
      localStorage.clear();
    }
    sessionStorage.setItem("register", 1);
  }

  submitLogout(e) {
    e.preventDefault();
    try {
      client.post("/logout", { withCredentials: true });
      localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
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
        <div className="app-header">
          <img
            className="logo-header-img"
            src={LogoHeader}
            alt="FonoTCS logo and name"
          />
          {localStorage.getItem("isUserConnected") ? (
            <button
              className="btn logout-btn"
              onClick={(e) => this.submitLogout(e)}
            >
              Desconectar
            </button>
          ) : null}
        </div>
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
          <Route path="/login-student" element={<LoginStudent />} exact />
          <Route path="/login-teacher" element={<LoginTeacher />} exact />
          <Route path="/register-student" element={<RegisterStudent />} exact />
          <Route path="/register-teacher" element={<RegisterTeacher />} exact />
          <Route path="/tutorial" element={<Tutorial />} exact />
          <Route path="/teacher-space" element={<TeacherSpace />} exact />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
