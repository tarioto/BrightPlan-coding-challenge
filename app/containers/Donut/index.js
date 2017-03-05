import React from 'react';
import ReactDOM from 'react-dom';
import Dimensions from 'react-dimensions'
import Donut from '../../components/Donut/index'

class DonutContainer extends React.Component {
  render() {
    let { width, height } = this.props;
    // For a real world project, use something like
    // https://github.com/digidem/react-dimensions
    // let width = window.innerWidth;
    // let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 2;
    // Centers the pie chart
    let x = width / 2;
    let y = height / 2;

    return (
      <svg width="100%" height="100%">
        <Donut
          x={x}
          y={y}
          innerRadius={radius * .35}
          outerRadius={radius}
          cornerRadius={7}
          padAngle={.02}
          data={this.props.data} />
      </svg>
    );
  }
}

// ReactDOM.render(
//   // App takes one prop: the pie chart data as an array of values
//   <DonutContainer data={[5, 2, 7, 1, 1, 3, 4, 9]} />,
//   document.getElementById('DonutContainer')
// );

export default Dimensions()(DonutContainer);
