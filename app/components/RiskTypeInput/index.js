import React from 'react';
import * as riskData from '../../../data';

class RiskTypeInput extends React.Component {
  render() {
    let { typeOfAmount } = this.props;
    return (
      <div className="input-group">
        <span className="input-group-addon">{ typeOfAmount }</span>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <span className="input-group-addon">.00</span>
      </div>
    );
  }
}

export default RiskTypeInput;
