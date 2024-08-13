import "./App.css";
import "./Global.css";
import "./TeacherSpace.css";
import ClassResultAccordion from './ClassResultAccordion';
import React, { Component } from "react";

export class TeacherSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
