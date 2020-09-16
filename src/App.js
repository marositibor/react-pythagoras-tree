import React from "react";
import "./styles.css";
import TreeRectangle from "./TreeRectangle";
import ControlledRange from "./ControlledRange";

export default function App() {
  let [startSize, setStartSize] = React.useState(100);
  let [rotate, setRotate] = React.useState(Math.PI / 4);
  let [maxChildren, setMaxChildren] = React.useState(8);

  return (
    <div>
      <div className="App" id="App">
        <TreeRectangle
          childNo={0}
          size={startSize}
          rotate={rotate}
          maxChildren={maxChildren}
        />
      </div>
      <div className="settings">
        <ControlledRange
          title={"Start Size"}
          value={startSize}
          min={0}
          max={100}
          step={1}
          callback={setStartSize}
        />
        <ControlledRange
          title={"Angle"}
          value={rotate * 1000}
          min={0}
          max={Math.PI * 500}
          step={1}
          callback={(x) => {
            setRotate(x / 1000);
          }}
        />
        <ControlledRange
          title={"Iterations"}
          value={maxChildren}
          min={0}
          max={10}
          step={1}
          callback={setMaxChildren}
        />
      </div>
    </div>
  );
}
