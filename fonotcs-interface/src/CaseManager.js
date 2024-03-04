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

  render() {
    let totalScore = 0;
    if (this.props.caseCount > 0) {
      totalScore = this.props.totalScore / this.props.caseCount;
    }
    return (
      <div className='global'>
        <div className='container'>
          <h2>Score Total: {totalScore} %</h2>
        </div>
      </div>
    );
  }
}
export default CaseManager;