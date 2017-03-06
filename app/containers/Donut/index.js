import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton } from 'react-bootstrap';
import Dimensions from 'react-dimensions'
import Donut from '../../components/Donut/index'

class DonutContainer extends React.Component {
  render() {
    let width = this.props.containerWidth;
    let height = this.props.containerHeight;
    let minViewportSize = Math.min(width, height);
    let radius = (minViewportSize * .7) / 2;
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

export default Dimensions([{elementResize: true}])(DonutContainer);
