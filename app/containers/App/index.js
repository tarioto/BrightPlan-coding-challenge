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

class App extends React.Component {
  render () {
    return <div>
    test
    </div>
  }
}


render(<App/>, document.getElementById('app'));
