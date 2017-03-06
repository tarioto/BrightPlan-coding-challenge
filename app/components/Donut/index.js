import React from 'react';
import * as d3 from 'd3';

import Slice from '../Slice/index'

class Donut extends React.Component {
  constructor(props) {
    super(props);
    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    this.renderSlice = this.renderSlice.bind(this);
  }

  render() {
    let {x, y, data} = this.props;
    let pie = d3.pie();
    return (
      <g transform={`translate(${x}, ${y})`}>
        {d3.pie()(data).map(this.renderSlice)}
      </g>
    );
  }

  renderSlice(value, i) {
    let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
    return (
      <Slice key={i}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={value}
            label={value.data}
            fill={this.colorScale(i)} />
    );
  }
}

export default Donut;
