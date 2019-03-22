import React, { Component } from "react";
import { axisBottom, scaleLinear, select } from "d3";

class Legend extends Component {
  axisRef = React.createRef();
  renderTicks = g => {
    const axisScale = scaleLinear()
      .domain(this.props.colorScale.domain())
      .range([0, this.props.legendWidth]);
    return g
      .attr("class", `x-axis`)
      .attr(
        "transform",
        `translate(${(this.props.svgWidth - this.props.legendWidth) / 2},${(this
          .props.svgHeight +
          this.props.legendHeight) /
          2})`
      )
      .call(
        axisBottom(axisScale)
          .ticks(this.props.legendWidth / 80)
          .tickSize(-this.props.legendHeight)
      );
  };
  componentDidMount() {
    select(this.axisRef.current).call(this.renderTicks);
  }

  render() {
    const {
      legendWidth,
      legendHeight,
      svgHeight,
      svgWidth,
      colorScale,
      selectedMetric
    } = this.props;

    return (
      <div className="legend-container">
        <div>{selectedMetric}</div>
        <div>
          <svg width={svgWidth} height={svgHeight}>
            <defs>
              <linearGradient id="linear-gradient">
                {colorScale.ticks().map((t, i, n) => (
                  <stop
                    key={t}
                    offset={`${(100 * i) / n.length}%`}
                    stopColor={colorScale(t)}
                  />
                ))}
              </linearGradient>
            </defs>
            <g
              transform={`translate(${(svgWidth - legendWidth) /
                2},${(svgHeight - legendHeight) / 2})`}
            >
              <rect
                width={legendWidth}
                height={legendHeight}
                style={{ fill: "url(#linear-gradient)" }}
              />
            </g>
            <g ref={this.axisRef} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Legend;
