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
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://fonotcs.medicina.ufmg.br/api/classes')
      .then(response => {
        console.log(response);
        /* this.setState({ cases: response.data }); */
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
          {/* <ClassResultAccordion title={title} content={content} /> */}
          <ClassResultAccordion/>
          <ClassResultAccordion/>
          <ClassResultAccordion/>
        </div>
      </div>
    );
  }
}
