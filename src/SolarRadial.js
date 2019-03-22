import React, { Component } from "react";
import { renderSolarRadial } from "./d3SolarRadial";
const cityLookup = {
  nyc: "New York City",
  seattle: "Seattle",
  houston: "Houston"
};
class SolarRadial extends Component {
  svgRef = React.createRef();
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.hoverId !== this.props.hoverId) {
      return false;
    }
    return true;
  }
  componentDidMount() {
    renderSolarRadial(this.props.id, this.svgRef.current, this.props.data, {
      colorScale: this.props.colorScale,
      radius: this.props.radius,
      svgWidth: this.props.svgWidth,
      handleMouseOver: this.props.handleMouseOver,
      handleMouseOut: this.props.handleMouseOut
    });
  }
  componentDidUpdate() {
    renderSolarRadial(this.props.id, this.svgRef.current, this.props.data, {
      colorScale: this.props.colorScale,
      radius: this.props.radius,
      containerWidth: this.props.svgWidth,
      handleMouseOver: this.props.handleMouseOver,
      handleMouseOut: this.props.handleMouseOut
    });
  }
  render() {
    return (
      <div className="solar-grid">
        <svg
          ref={this.svgRef}
          width={this.props.svgWidth}
          height={this.props.svgWidth}
        />
        <h3>{cityLookup[this.props.id]}</h3>
      </div>
    );
  }
}
export default SolarRadial;
