import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { PageHeader, DropdownButton, Grid, Row, Col, Clearfix, Panel } from 'react-bootstrap';
import DonutContainer from '../Donut/index';
import RiskTypeInputContainer from '../RiskTypeInput/index';
import CategoryForm from '../Form/index'
import * as riskData from '../../../data';
import RiskDropDown from '../../components/RiskDropDown/index'
import RiskTypeInput from '../../components/RiskTypeInput/index'
import Total from '../../components/Total/index'

class App extends React.Component {
  render () {
    const { risk } = this.props;
    return <div className="container-fluid">
      <div className="container">
        <div className="page-header">
          <h1>Ideal Portfolio Finder</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{height: 400}}>
              <RiskDropDown />
              {
                risk !== 'Pick your risk number' ? (
                <DonutContainer data={Object.values(riskData[risk])} />
              ) : (
                <div></div>
              )
            }
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <CategoryForm />
            {
              risk !== 'Pick your risk number' ? (
              <Total data={Object.values(riskData[risk])}/>
            ) : (
              <Total />
            )
          }
          </div>
        </div>
      </div>
      <div className="container">

        <hr></hr>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">made by tim arioto</p>
          </div>
        </footer>
      </div>
    </div>
  }
}

App.propTypes = {
  risk: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    risk: state.RiskDropDownReducer.risk,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
