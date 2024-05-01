import "./App.css";
import "./Global.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Case extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: {},
      totalScore: 0,
      case: {},
      questions: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.case.id !== this.props.case.id) {
      this.setState({ nextCaseId: this.props.case.id });
    }
  }

  componentDidMount() {
      this.setState({ nextCaseId: this.props.case.id + 1});
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
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="global">
        <div className="container">
        {this.props.case && this.props.questions.length > 0 && (
          <div>
            <h2>Caso {this.props.case.id} de 2:</h2>

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
            {this.props.case.id === 2 ? (
              <NavLink className="btn form" to={`/casemanager`} onClick={this.handleSubmit}>
                Próxima questão
              </NavLink>
            ) : (
              <NavLink className="btn form" to={`/case/${this.props.case.id + 1}`} onClick={this.handleSubmit}>
                Próxima questão
              </NavLink>
            )}
          </div>
        )}
        </div>
      </div>
    );
  }
}
