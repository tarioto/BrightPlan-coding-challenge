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
    return <div>
      <PageHeader />
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={6} lg={6}><Panel header={'test'}>Look I'm in a well!</Panel></Col>
          <Col xs={12} sm={12} md={6} lg={6}><Panel>Look I'm in a well!</Panel></Col>
          {/* <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
          <Col sm={6} md={3}><Panel>Look I'm in a well!</Panel></Col>
          <Col sm={6} md={3}><Panel>Look I'm in a well!</Panel></Col> */}
        </Row>
      </Grid>

      <DropdownButton />
      <div className="container" >
      <div className="page-header">
        <h1>Sticky footer</h1>
      </div>
      <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>
      <p>Use <a href="../sticky-footer-navbar">the sticky footer with a fixed navbar</a> if need be, too.</p>
    </div>

    <footer className="footer">
      <div className="container">
        <p className="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>

    </div>
  }
}


render(<App/>, document.getElementById('app'));
