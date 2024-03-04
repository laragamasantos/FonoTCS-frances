import React, { Component } from "react";
import { Case2 } from "./Case2";

export class CaseManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      responses: {}
    };
  }

  /* handleResponseChange = (question, value) => {
    const newResponses = {
      ...this.state.responses,
      [question]: value
    };
  }; */

  render() {
    let totalScore = 0;
    if (this.props.caseCount > 0) {
      totalScore = this.props.totalScore;
    }
    return (
      <div className='global'>
        <div className='container'>
          <h2>Total Score: {totalScore}</h2>
        </div>
      </div>
    );
  }
}
export default CaseManager;