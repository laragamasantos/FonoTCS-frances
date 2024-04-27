import "./App.css";
import "./Global.css";
import axios from 'axios';
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

  render() {
    return (
      <div className="global">
        <div className="container">
        {this.state.case && (
          <h2>Cas {this.state.case.id} de 3:</h2>
        )}

          <p>
            Patient de 21 ans, étudiant universitaire, réfère une perte auditive
            depuis l'enfance et signale une détérioration progressive de
            l'audition depuis 5 ans. Présente actuellement une grande difficulté
            à comprendre la parole, ce qui nuit à son apprentissage.
          </p>
          <p>
            <strong>Si vous envisagez de...</strong> &nbsp; Effectuer l'examen
            de traitement auditif
          </p>
          <p>
            <strong>Et vous trouvez...</strong> &nbsp; Dans l'anamnèse, le
            rapport selon lequel le patient a plusieurs membres de la famille
            avec une perte auditive
          </p>
          <p>
            <strong>La décision devient:</strong>
          </p>
          <ul>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest1"
                  value="0.77"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest1",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -2: Fortement contre-indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest1"
                  value="1"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest1",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -1: Peu utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest1"
                  value="0.22"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest1",
                      parseFloat(e.target.value)
                    )
                  }
                />
                0: Ni plus ni moins utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest1"
                  value="0.55"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest1",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +1: Indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest1"
                  value="0.22"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest1",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +2: Fortement indiquée
              </li>
            </label>
          </ul>
          <hr />
          <p>
            <strong>Si vous envisagez de...</strong> &nbsp; Référer à
            l'évaluation de l'implant cochléaire
          </p>
          <p>
            <strong>Et vous trouvez...</strong> &nbsp; Dans la logoaudiométrie,
            des seuils de réception de la parole de 45 dB bilatéralement
          </p>
          <p>
            <strong>La décision devient:</strong>
          </p>
          <ul>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest2"
                  value="1"
                  onChange={(e) => (e) =>
                    this.handleResponseChange(
                      "quest2",
                      parseFloat(e.target.value)
                    )}
                />
                -2: Fortement contre-indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest2"
                  value="0.33"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest2",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -1: Peu utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest2"
                  value="0.13"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest2",
                      parseFloat(e.target.value)
                    )
                  }
                />
                0: Ni plus ni moins utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest2"
                  value="0.13"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest2",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +1: Indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest2"
                  value="0.06"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest2",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +2: Fortement indiquée
              </li>
            </label>
          </ul>
          <hr />
          <p>
            <strong>Si vous envisagez de...</strong> &nbsp; Adapter des aides
            auditives individuelles
          </p>
          <p>
            <strong>Et vous trouvez...</strong> &nbsp; Dans l'audiométrie, le
            résultat suivant:
          </p>
          <p>
            <strong>La décision devient:</strong>
          </p>
          <ul>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest3"
                  value="0.06"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest3",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -2: Fortement contre-indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest3"
                  value="0"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest3",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -1: Peu utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest3"
                  value="0"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest3",
                      parseFloat(e.target.value)
                    )
                  }
                />
                0: Ni plus ni moins utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest3"
                  value="0.41"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest3",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +1: Indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest3"
                  value="1"
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest3",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +2: Fortement indiquée
              </li>
            </label>
          </ul>
          <hr />
          <p>
            <strong>Si vous envisagez de...</strong> &nbsp; Référer à la
            réadaptation auditive
          </p>
          <p>
            <strong>Et vous trouvez...</strong> &nbsp; Dans l'anamnèse, le
            rapport selon lequel le patient utilise la lecture labiale pour
            aider à comprendre ce que les gens disent et communique en Langue
            des signes avec les membres de la famille sourds
          </p>
          <p>
            <strong>La décision devient:</strong>
          </p>
          <ul>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest4"
                  value="0"
                  required
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest4",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -2: Fortement contre-indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest4"
                  value="0.42"
                  required
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest4",
                      parseFloat(e.target.value)
                    )
                  }
                />
                -1: Peu utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest4"
                  value="0.16"
                  required
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest4",
                      parseFloat(e.target.value)
                    )
                  }
                />
                0: Ni plus ni moins utile
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest4"
                  value="1"
                  required
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest4",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +1: Indiquée
              </li>
            </label>
            <label>
              <li>
                <input
                  type="radio"
                  name="quest4"
                  value="0.5"
                  required
                  onChange={(e) =>
                    this.handleResponseChange(
                      "quest4",
                      parseFloat(e.target.value)
                    )
                  }
                />
                +2: Fortement indiquée
              </li>
            </label>
          </ul>
          <NavLink className="btn form" to="/case2" onClick={this.handleSubmit}>
            Prochaine question
          </NavLink>
        </div>
      </div>
    );
  }
}
