import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
const selector = formValueSelector('category')

const totalCalculator = (gold = 0, bonds = 0, stocks = 0, realEstate = 0, mutualFunds = 0) => {
  return Number(gold) + Number(bonds) + Number(stocks) + Number(realEstate) + Number(mutualFunds)
}

class Total extends React.Component {

  render() {
    let { gold, bonds, stocks, realEstate, mutualFunds } = this.props;

    let total = totalCalculator(gold, bonds, stocks, realEstate, mutualFunds);
    let percentages = this.props.data || [];

    return (
      <div>
        <h1>
          { total  }
        </h1>
        {/* <h1>
          { total * (percentages[0] * .01) - gold / total * 100 || 0 }
        </h1>
        <h1>
          { total * (percentages[1] * .01) - bonds / total * 100 || 0 }
        </h1>
        <h1>
          { total * (percentages[2] * .01) - stocks / total * 100 || 0 }
        </h1>
        <h1>
          { total * (percentages[3] * .01) - realEstate / total * 100 || 0 }
        </h1>
        <h1>
          { total * (percentages[4] * .01) - mutualFunds / total * 100 || 0 }
        </h1> */}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    gold: selector(state, 'gold'),
    bonds: selector(state, 'bonds'),
    stocks: selector(state, 'stocks'),
    realEstate: selector(state, 'realEstate'),
    mutualFunds: selector(state, 'mutualFunds')
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Total);
