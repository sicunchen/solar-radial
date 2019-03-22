import React, { Component } from "react";
import "./App.css";
import SolarRadial from "./SolarRadial";
import { RadioGroup, Radio } from "react-radio-group";
import { csv, scaleSequential, interpolateOrRd } from "d3";
import NYC from "./nyc.CSV";
import SEATTLE from "./seattle.CSV";
import HOUSTON from "./houston.CSV";
import { Tooltip } from "./Tooltip";
import Legend from "./Legend";
const colorScale = scaleSequential(interpolateOrRd).domain([1, 1100]);

class App extends Component {
  state = {
    selectedMetric: "GHI",
    svgWidth: null,
    solarData: null,
    isLoaded: false,
    tooltipData: null,
    hoverId: null
  };
  containerRef = React.createRef();

  handleMouseOver = (key, hoverId) => {
    const month = hoverId.slice(0, 2);
    const day = hoverId.slice(2, 4);
    const time = hoverId.slice(4);

    const tooltipData = Object.keys(this.state.solarData).map(key => {
      return {
        city: key,
        data: this.state.solarData[key].filter(
          d =>
            d.date.startsWith(`${month}/${day}/`) && d.time === parseInt(time)
        )
      };
    });
    this.setState({ tooltipData, hoverId });
  };
  handleMouseOut = () => {
    this.setState({ tooltipData: null, hoverId: null });
  };

  componentDidMount() {
    this.setState({
      svgWidth: (0.8 * window.innerWidth) / 3
    });
    this.fetchData(this.state.selectedMetric);
  }
  componentDidUpdate(preProps, prevState) {
    if (prevState.selectedMetric !== this.state.selectedMetric) {
      this.fetchData(this.state.selectedMetric);
    }
  }

  handleChange = value => {
    this.setState({ selectedMetric: value, isLoaded: false });
  };
  filterSolarData = (cityData, selectedMetric) => {
    return cityData.map(d => {
      return {
        date: d["Date (MM/DD/YYYY)"],
        time: parseInt(d["Time (HH:MM)"].split(":")[0]),
        value: parseInt(d[`${selectedMetric} (W/m^2)`]),
        DBT: parseFloat(d["Dry-bulb (C)"]),
        DPT: parseFloat(d["Dew-point (C)"]),
        windspd: parseFloat(d["Wspd (m/s)"])
      };
    });
  };

  fetchData = selectedMetric => {
    Promise.all([csv(NYC), csv(HOUSTON), csv(SEATTLE)])
      .then(responses => {
        const solarData = [];
        responses.forEach(data => {
          solarData.push(
            data
              .filter(d => {
                const hour = parseInt(d["Time (HH:MM)"].split(":")[0]);
                return ![1, 2, 3, 4, 5, 6, 20, 21, 22, 23, 24].includes(hour);
              })
              .map(d => {
                return {
                  date: d["Date (MM/DD/YYYY)"],
                  time: parseInt(d["Time (HH:MM)"].split(":")[0]),
                  value: parseInt(d[`${selectedMetric} (W/m^2)`]),
                  DBT: parseFloat(d["Dry-bulb (C)"]),
                  DPT: parseFloat(d["Dew-point (C)"]),
                  windspd: parseFloat(d["Wspd (m/s)"])
                };
              })
          );
        });
        return solarData;
      })
      .then(([nyc, houston, seattle]) => {
        this.setState({
          isLoaded: true,
          solarData: {
            nyc,
            houston,
            seattle
          }
        });
      });
  };

  render() {
    const {
      solarData,
      svgWidth,
      selectedMetric,
      isLoaded,
      tooltipData,
      hoverId
    } = this.state;
    const radius = (0.85 * svgWidth) / 2;
    return (
      <div className="App">
        <div className="text">
          <h2> Solar Rhythm in NYC, Houston and Seattle</h2>
          <p>
            The "circular heatmaps" below visualize the hourly (7am-7pm) solar
            values in a single year for three US cities. The two important
            metrics represented in the visualizations are Global Horizontal
            Irradiance (GHI), the total amount of direct and diffuse solar
            radiation received on a horizontal surface, and the Direct Normal
            Irradiance (DNI), which is the amount of solar radiation received in
            a collimated beam on a surface that is always held perpendicular (or
            normal) to the sun. Hover over hourly segments to see other
            meteorological metrics such as dry bulb temperature (DBT), dew point
            temperature (DPT), and wind speed.
          </p>
          <p>
            Data source: Typical Meteorological Year, version 3 (TMY3) data sets
            released by by the National Renewable Energy Laboratory (NREL).
          </p>
        </div>

        <div className="radio-container">
          <RadioGroup
            name="fruit"
            selectedValue={selectedMetric}
            onChange={this.handleChange}
          >
            <span className="radio-label">Choose a metric:</span>
            <label className="radio-label">
              <Radio value="GHI" />
              GHI
            </label>
            <label className="radio-label">
              <Radio value="DNI" />
              DNI
            </label>
          </RadioGroup>
        </div>

        {isLoaded ? (
          <div className="grid-container">
            {Object.keys(solarData).map(key => (
              <SolarRadial
                key={key}
                data={solarData[key]}
                svgWidth={svgWidth}
                radius={radius}
                colorScale={colorScale}
                id={key}
                handleMouseOver={this.handleMouseOver}
                handleMouseOut={this.handleMouseOut}
                hoverId={hoverId}
              />
            ))}
            {tooltipData &&
              tooltipData.map((d, i) => (
                <Tooltip
                  key={d.city}
                  selectedMetric={selectedMetric}
                  {...d.data[0]}
                  style={{
                    position: "absolute",
                    width: radius,
                    height: svgWidth / 3,
                    left: (svgWidth - radius) / 2 + svgWidth * i,
                    top: (svgWidth - radius) / 2,
                    fontSize: `${(18 * svgWidth) / 600}px`
                  }}
                />
              ))}
          </div>
        ) : (
          <div className="loader" style={{ height: `${svgWidth + 30}px` }}>
            ...loading
          </div>
        )}

        <Legend
          selectedMetric={selectedMetric}
          colorScale={colorScale}
          legendHeight={20}
          legendWidth={300}
          svgHeight={100}
          svgWidth={350}
        />
      </div>
    );
  }
}

export default App;
