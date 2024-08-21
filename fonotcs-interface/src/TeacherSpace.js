import "./App.css";
import "./Global.css";
import "./TeacherSpace.css";
import ClassResultAccordion from './ClassResultAccordion';
import React, { Component } from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export class TeacherSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    axios.get('https://fonotcs.medicina.ufmg.br/api/classes')
      .then(response => {
        console.log(response);
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="global">
        <div className="container">
          <h2>Espaço do professor</h2>
          <hr />
          {Object.keys(this.state.results).map((classId) => (
            <ClassResultAccordion title={classId} content={this.state.results[classId]} />
          ))}
        </div>
      </div>
    );
  }
}
