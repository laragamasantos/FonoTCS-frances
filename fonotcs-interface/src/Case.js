import "./App.css";
import "./Global.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import case1 from "./imgs/case1.jpg";
import case8 from "./imgs/case8.jpg";
import case10 from "./imgs/case10.jpg";
import case16 from "./imgs/case16.jpg";

const CASES_NUMBER = 28;

export class Case extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: {},
      totalScore: 0,
      case: {},
      questions: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.case.id !== this.props.case.id) {
      this.setState({ nextCaseId: this.props.case.id });
    }
  }

  componentDidMount() {
    this.setState({ nextCaseId: this.props.case.id + 1 });
  }

  handleResponseChange = (question, value) => {
    this.props.handleResponseChange(+value);
    const newResponses = {
      ...this.state.responses,
      [question]: value,
    };
    this.setState({ responses: newResponses });
  };

  handleSubmit = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="global">
        <div className="container">
          {this.props.case && this.props.questions.length > 0 && (
            <div>
              <h2>
                Caso {this.props.case.id} de {CASES_NUMBER}:
              </h2>

              <p className="case-description">{this.props.case.description}</p>

              {this.props.questions.map((question) => (
                <div key={question.id}>
                  <p>
                    <strong>Se você está pensando em... </strong> &nbsp;
                    {question.if_situation}
                  </p>
                  <p>
                    <strong>E você encontra...</strong> &nbsp;
                    {question.and_situation}
                  </p>
                  <div className="case-img-container">
                    {this.props.case.id === 1 && question.id === 3 && (
                      <img className="case-img" src={case1} alt="" />
                    )}
                    {this.props.case.id === 8 && question.id === 35 && (
                      <img className="case-img" src={case8} alt="" />
                    )}
                    {this.props.case.id === 10 && question.id === 41 && (
                      <img className="case-img" src={case10} alt="" />
                    )}
                    {this.props.case.id === 16 && question.id === 68 && (
                      <img className="case-img" src={case16} alt="" />
                    )}
                  </div>
                  <p>
                    <strong>A decisão se torna: </strong>
                  </p>
                  <ul>
                    <label>
                      <li>
                        <input
                          type="radio"
                          name={question.id}
                          value={question.option_a_weight}
                          onChange={(e) =>
                            this.handleResponseChange(
                              question.id,
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        -2: Fortemente contraindicada
                      </li>
                    </label>
                    <label>
                      <li>
                        <input
                          type="radio"
                          name={question.id}
                          value={question.option_b_weight}
                          onChange={(e) =>
                            this.handleResponseChange(
                              question.id,
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        -1: Pouco útil
                      </li>
                    </label>
                    <label>
                      <li>
                        <input
                          type="radio"
                          name={question.id}
                          value={question.option_c_weight}
                          onChange={(e) =>
                            this.handleResponseChange(
                              question.id,
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        0: Nem mais nem menos útil
                      </li>
                    </label>
                    <label>
                      <li>
                        <input
                          type="radio"
                          name={question.id}
                          value={question.option_d_weight}
                          onChange={(e) =>
                            this.handleResponseChange(
                              question.id,
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        +1: Indicada
                      </li>
                    </label>
                    <label>
                      <li>
                        <input
                          type="radio"
                          name={question.id}
                          value={question.option_e_weight}
                          onChange={(e) =>
                            this.handleResponseChange(
                              question.id,
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        +2: Fortemente indicada
                      </li>
                    </label>
                  </ul>
                  <hr />
                </div>
              ))}
              <div className="button-container">
                {this.props.case.id === CASES_NUMBER ? (
                  <NavLink
                    className="btn form"
                    to={`/casemanager`}
                    onClick={this.handleSubmit}
                  >
                    Próxima questão
                  </NavLink>
                ) : (
                  <NavLink
                    className="btn form"
                    to={`/case/${this.props.case.id + 1}`}
                    onClick={this.handleSubmit}
                  >
                    Próxima questão
                  </NavLink>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
