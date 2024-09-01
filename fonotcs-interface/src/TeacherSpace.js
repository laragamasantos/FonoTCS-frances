import "./App.css";
import "./Global.css";
import "./TeacherSpace.css";
import ClassResultAccordion from "./ClassResultAccordion";
import React, { Component } from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "https://fonotcs.medicina.ufmg.br/api",
});

export class TeacherSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      newClassId: null,
    };
  }

  componentDidMount() {
    client
      .get("/results")
      .then((response) => {
        console.log(response);
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = {
      classId: this.props.newClassId
    };

    client
      .post("/create-class", data, {
        withCredentials: true,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="global">
        <div className="container">
          <div className="header">
            <h2>Espaço do professor</h2>
            <form
              className="new-class-form"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div>
                <label>
                  Criar nova turma
                  <input
                    type="text"
                    placeholder="Digite o código"
                    onChange={(e) =>
                      this.setState({ newClassId: e.target.value })
                    }
                  />
                </label>
              </div>
              <button className="btn new-class-btn" type="submit">
                Criar
              </button>
            </form>
          </div>
          <hr />
          {Object.keys(this.state.results).map((classId) => (
            <ClassResultAccordion
              title={classId}
              content={this.state.results[classId]}
            />
          ))}
        </div>
      </div>
    );
  }
}
