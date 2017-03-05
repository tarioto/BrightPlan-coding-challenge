// import React from 'react';
//
// export default class App extends React.PureComponent {
//
//   static propTypes = {
//     children: React.PropTypes.node,
//   };
//
//   render() {
//     return (
//       <div>
//         test one 2
//       </div>
//     );
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { PageHeader, DropdownButton, Grid, Row, Col, Clearfix, Panel } from 'react-bootstrap';
import DonutContainer from '../Donut/index';
import RiskTypeInputContainer from '../RiskTypeInput/index';
import * as riskData from '../../../data';
import RiskTypeInput from '../../components/RiskTypeInput/index'

class App extends React.Component {
  render () {
    return <div className="container-fluid">

      <div className="container">
        <div className="page-header">
          <h1>Ideal Portfolio Finder</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              {/* <DonutContainer data={[5, 2, 7, 1, 1, 3, 4, 9]} /> */}
              <DonutContainer data={Object.values(riskData['10'])} />
            </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <RiskTypeInputContainer amountTypes={Object.keys(riskData['10'])}/>
            <Panel>Look I'm in a well!</Panel>

          </div>
        </div>
      </div>
      <div className="container">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6} lg={6}>
              <Panel>Look I'm in a well!

                {/* <DropdownButton /> */}
              </Panel>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}><Panel>Look I'm in a well!</Panel></Col>
            {/* <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>

            <Col xs={12} sm={6} md={3}><Panel>Look I'm in a well!</Panel></Col>
            <Col xs={12} sm={6} md={3}><Panel>Look I'm in a well!</Panel></Col> */}
          </Row>
        </Grid>
        <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>

        <hr></hr>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    </div>
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
