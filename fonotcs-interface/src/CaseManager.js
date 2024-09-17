import React, { Component } from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const token = localStorage.getItem("access_token");

export class CaseManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      responses: {},
    };
  }

  componentDidMount() {
    let data = {
      totalScore: this.props.totalScore / 88,
      classId: localStorage.getItem("classId"),
    };

    client
      .post("/casemanager/savescore", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch(function (error) {
        if (error) {
          console.log(error.message);
        } else {
          console.log("erro");
        }
      });
  }

  render() {
    let totalScore = 0;
    if (this.props.caseCount > 0) {
      totalScore = this.props.totalScore / 88;
    }
    return (
      <div className="global">
        <div className="container">
          <h2>Resultado final: {(totalScore * 100).toFixed(2)}%</h2>
        </div>
      </div>
    );
  }
}
export default CaseManager;
