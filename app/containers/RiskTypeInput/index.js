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
        <RiskTypeInput typeOfAmount={amountTypes[0]}/>
        <RiskTypeInput typeOfAmount={amountTypes[1]}/>
        <RiskTypeInput typeOfAmount={amountTypes[2]}/>
        <RiskTypeInput typeOfAmount={amountTypes[3]}/>
        <RiskTypeInput typeOfAmount={amountTypes[4]}/>
      </div>
    );
  }
}


export default RiskTypeInputContainer;
