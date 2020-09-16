import React from "react";
import "./ControlledRange.css";

export default function ControlledRange({
  title,
  min,
  max,
  value,
  step,
  callback
}) {
  return (
    <div>
      <label>
        {title} : {parseInt(value, 10)}
      </label>
      <br />
      <input
        type="range"
        min={parseInt(min, 10)}
        max={parseInt(max, 10)}
        value={parseInt(value, 10)}
        step={parseInt(step, 10)}
        onChange={(e) => {
          callback(parseInt(e.target.value, 10));
        }}
      ></input>
    </div>
  );
}
