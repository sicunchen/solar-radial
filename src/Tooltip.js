import React from "react";
export const Tooltip = ({
  date,
  time,
  DBT,
  DPT,
  windspd,
  value,
  style,
  selectedMetric
}) => {
  return (
    <div style={style} className="tooltip-grid">
      <div className="solar-measure tooltip-area">
        <div
          style={{
            color: "#808080",
            fontSize: `${style.fontSize.replace("px", "") * 0.8}px`
          }}
        >{`${date.replace(/\/\d{4}$/g, "")} ${time}:00`}</div>
        <div
          style={{
            fontSize: `${style.fontSize.replace("px", "") * 1.5}px`
          }}
        >
          {value}
        </div>
        <div
          style={{
            color: "#808080",
            fontSize: `${style.fontSize.replace("px", "") * 0.8}px`
          }}
        >{`${selectedMetric} (Wh/m²)`}</div>
      </div>
      <div className="temp tooltip-area">
        <div>{`${DBT}/${DPT}`}</div>
        <div
          style={{
            color: "#808080",
            fontSize: `${style.fontSize.replace("px", "") * 0.8}px`
          }}
        >
          DBT/DPT (°C)
        </div>
      </div>
      <div className="wind tooltip-area">
        <div>{windspd}</div>
        <div
          style={{
            color: "#808080",
            fontSize: `${style.fontSize.replace("px", "") * 0.8}px`
          }}
        >
          Wind Speed (m/s)
        </div>
      </div>
    </div>
  );
};
