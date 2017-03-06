import React from 'react';

class RiskTypeInput extends React.Component {
  render() {
    let { typeOfAmount, value, changeValue } = this.props;
    return (
      <div className="input-group">
        <span className="input-group-addon">{ typeOfAmount }</span>
        <input name="firstName" component={React.DOM.input} type="text" className="form-control" value={ value } onChange={changeValue} aria-label="Amount (to the nearest dollar)" />
        <span className="input-group-addon">.00</span>
      </div>
    );
  }
}

export default RiskTypeInput;
