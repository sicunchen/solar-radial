import React from "react";
import Circos, { HEATMAP } from "react-circos";
import heatmap from "./heatmap.json";
import layout from "./months.json";

const size = 800;

export const Example = () => (
  <Circos
    size={800}
    layout={layout}
    config={{
      gap: 0.15,

      innerRadius: size / 2 - 80,
      outerRadius: size / 2 - 30,
      ticks: {
        display: false
      },
      labels: {
        position: "center",
        display: true,
        size: 14,
        color: "#000",
        radialOffset: 15
      }
    }}
    tracks={[
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.95,
          outerRadius: 0.98,
          logScale: false,
          color: "YlOrRd",
          tooltipContent: function(datum, index) {
            console.log(datum);
            return `<h5>${datum.block_id}:${datum.start}-${datum.end} ➤ ${
              datum.value
            }`;
          }
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.91,
          outerRadius: 0.94,
          logScale: false,
          color: "YlOrRd",
          tooltipContent: function(datum, index) {
            console.log(datum);
            return `<h5>${datum.block_id}:${datum.start}-${datum.end} ➤ ${
              datum.value
            }`;
          }
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.87,
          outerRadius: 0.9,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.83,
          outerRadius: 0.86,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.79,
          outerRadius: 0.82,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.75,
          outerRadius: 0.78,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.71,
          outerRadius: 0.74,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.67,
          outerRadius: 0.7,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.63,
          outerRadius: 0.66,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.59,
          outerRadius: 0.62,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.55,
          outerRadius: 0.58,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.51,
          outerRadius: 0.54,
          logScale: false,
          color: "YlOrRd"
        }
      },
      {
        type: HEATMAP,
        data: heatmap,
        config: {
          innerRadius: 0.47,
          outerRadius: 0.5,
          logScale: false,
          color: "YlOrRd"
        }
      }
    ]}
  />
);
