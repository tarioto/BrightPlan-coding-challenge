import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as typeActions from './actions'
import RiskTypeInput from '../../components/RiskTypeInput/index'

class RiskTypeInputContainer extends React.Component {
  render() {
    let { amountTypes, gold, changeValue } = this.props;
    const inputs = amountTypes.map((type) => {
      <div>

        <RiskTypeInput amount={type}/>
      </div>
    })

    return (
      <div>
        <RiskTypeInput typeOfAmount={amountTypes[0]} value={gold} changeValue={changeValue()}/>
        <RiskTypeInput typeOfAmount={amountTypes[1]}/>
        <RiskTypeInput typeOfAmount={amountTypes[2]}/>
        <RiskTypeInput typeOfAmount={amountTypes[3]}/>
        <RiskTypeInput typeOfAmount={amountTypes[4]}/>
        <div>{}</div>
      </div>
    );
  }
}

RiskTypeInputContainer.propTypes = {
  gold: PropTypes.number,
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    gold: state.RiskTypeInputReducer.gold,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeValue: (value) => dispatch(typeActions.changeValue(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskTypeInputContainer);
