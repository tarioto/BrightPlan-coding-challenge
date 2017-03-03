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
import {render} from 'react-dom';
import { PageHeader, DropdownButton, Grid, Row, Col, Clearfix, Panel } from 'react-bootstrap';

class App extends React.Component {
  render () {
    return <div className="container-fluid">

      <div className="container">
        <div className="page-header">
          <h1>Ideal Portfolio Finder</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="well well-lg col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div></div>
            </div>
            <div className="well well-lg col-xs-12 col-sm-6 col-md-6 col-lg-6">
              al
            </div>
          </div>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6} lg={6}>
              <Panel>Look I'm in a well!

                <DropdownButton />
              </Panel>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}><Panel>Look I'm in a well!</Panel></Col>
            {/* <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>

            <Col xs={12} sm={6} md={3}><Panel>Look I'm in a well!</Panel></Col>
            <Col xs={12} sm={6} md={3}><Panel>Look I'm in a well!</Panel></Col> */}
          </Row>
        </Grid>
        <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>
        <p>Use <a href="../sticky-footer-navbar">the sticky footer with a fixed navbar</a> if need be, too.</p>
      </div>

      <hr></hr>
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Place sticky footer content here.</p>
        </div>
      </footer>

    </div>
  }
}


render(<App/>, document.getElementById('app'));
