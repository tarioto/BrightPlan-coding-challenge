import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';
import * as riskActions from './actions';

const RiskDropDown = (props) => {
  const { changeRisk, risk } = props;
  return (
    <div className="dropdown">
      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {risk}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a onClick={(e) => changeRisk('1')}>1</a></li>
        <li><a onClick={(e) => changeRisk('2')}>2</a></li>
        <li><a onClick={(e) => changeRisk('3')}>3</a></li>
        <li><a onClick={(e) => changeRisk('4')}>4</a></li>
        <li><a onClick={(e) => changeRisk('5')}>5</a></li>
        <li><a onClick={(e) => changeRisk('6')}>6</a></li>
        <li><a onClick={(e) => changeRisk('7')}>7</a></li>
        <li><a onClick={(e) => changeRisk('8')}>8</a></li>
        <li><a onClick={(e) => changeRisk('9')}>9</a></li>
        <li><a onClick={(e) => changeRisk('10')}>10</a></li>
      </ul>
    </div>
  );
}


RiskDropDown.propTypes = {
  risk: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    risk: state.RiskDropDownReducer.risk,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRisk: (number) => dispatch(riskActions.changeRisk(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskDropDown);
