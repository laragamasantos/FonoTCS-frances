import "./App.css";
import "./Global.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Case1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: {},
      totalScore: 0,
      case: {},
      questions: []
    };
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
    console.log("Submitted values:", this.state.responses);
    console.log("Total score:", this.state.totalScore);
    window.scrollTo(0, 0);
  };

  getNextCasePath = () => {
    const nextCaseId = this.props.case.id + 1;
    console.log("Next case id:", nextCaseId); 
    return `/case/${nextCaseId}`;
  };

  render() {
    return (
      <div className="global">
        <div className="container">
        {this.props.case && this.props.questions.length > 0 && (
          <div>
            <h2>Caso {this.props.case.id} de 3:</h2>

            <p>
              {this.props.case.description}
            </p>

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
            <NavLink className="btn form" to={this.getNextCasePath} onClick={this.handleSubmit}>
              Próxima questão
            </NavLink>
          </div>
        )}
        </div>
      </div>
    );
  }
}
