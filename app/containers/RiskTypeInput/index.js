import React from 'react';
import RiskTypeInput from '../../components/RiskTypeInput/index'

class RiskTypeInputContainer extends React.Component {
  render() {
    let { amountTypes } = this.props;
    const inputs = amountTypes.map((type) => {
      <div>

        <RiskTypeInput amount={type}/>
      </div>
    })

    return (
      <div>
        <RiskTypeInput amount={amountTypes[0]}/>
        <RiskTypeInput amount={amountTypes[1]}/>
        <RiskTypeInput amount={amountTypes[2]}/>
        <RiskTypeInput amount={amountTypes[3]}/>
        <RiskTypeInput amount={amountTypes[4]}/>
      </div>
    );
  }
}


export default RiskTypeInputContainer;
