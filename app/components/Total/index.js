import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
// import * as typeActions from './actions'
// import RiskTypeInput from '../../components/RiskTypeInput/index'
const selector = formValueSelector('category')

const totalCalculator = (gold = 0, bonds = 0, stocks = 0, realEstate = 0, mutualFunds = 0) => {
  return Number(gold) + Number(bonds) + Number(stocks) + Number(realEstate) + Number(mutualFunds)
}
class Total extends React.Component {
  constructor(props) {
    super(props);
    // this.calculateTotal = this.calculateTotal.bind(this);
  }

  render() {
    let { gold, bonds, stocks, realEstate, mutualFunds } = this.props;

    return (
      <div>
        <h1>
          { totalCalculator(gold, bonds, stocks, realEstate, mutualFunds) }
        </h1>
      </div>
    );
  }

}

Total.propTypes = {
  // gold: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    gold: selector(state, 'gold'),
    bonds: selector(state, 'bonds'),
    stocks: selector(state, 'stocks'),
    realEstate: selector(state, 'realEstate'),
    mutualFunds: selector(state, 'mutualFunds')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeValue: (value) => dispatch(typeActions.changeValue(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Total);
