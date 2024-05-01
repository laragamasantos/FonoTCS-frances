import React, { Component } from "react";

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
      totalScore = this.props.totalScore / 7;
    }
    return (
      <div className='global'>
        <div className='container'>
          <h2>Score Total: {(totalScore * 100).toFixed(2)}%</h2>
        </div>
      </div>
    );
  }
}
export default CaseManager;