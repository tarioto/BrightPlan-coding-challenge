import React from 'react';
import * as d3 from 'd3';

class Slice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false};
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({isHovered: true});
  }

  onMouseOut() {
    this.setState({isHovered: false});
  }

  render() {
    let {value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle, ...props} = this.props;
    // https://github.com/d3/d3/wiki/SVG-Shapes#arc
    if (this.state.isHovered) {
      outerRadius *= 1.2;
    }

    let arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
    return (
      <g onMouseOver={this.onMouseOver}
         onMouseOut={this.onMouseOut}
         {...props}>
        <path d={arc(value)} fill={fill} />
        <text transform={`translate(${arc.centroid(value)})`}
            dy=".35em"
            textAnchor="middle"
            fill="white">
          {label}
        </text>
      </g>
    );
  }
}

export default Slice;
