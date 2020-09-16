import React from "react";

function provideRectangleStyle(size, maxChildren, childNo, left, rotate) {
  const rectangleStyle = {
    position: "absolute",
    bottom: "0px",
    top: -size + "px",
    height: size + "px",
    width: size + "px",
    backgroundColor: `rgba(${(childNo / maxChildren) * 255},${
      (childNo / maxChildren) * 200
    },${(childNo / maxChildren) * 200})`,
    transformOrigin: left ? `bottom left` : `bottom right`,
    transform: ` rotate(${left ? rotate - Math.PI / 2 : rotate}rad)
      scale(${left ? Math.sin(rotate) : Math.cos(rotate)})`
  };

  if (childNo === 0) {
    rectangleStyle.transform = "";
    rectangleStyle.left = `calc(50% - ${size / 2}px)`;
    rectangleStyle.top = "";
  }
  return rectangleStyle;
}

export default function TreeRectangle({
  size,
  maxChildren,
  childNo,
  left,
  rotate
}) {
  const style = provideRectangleStyle(size, maxChildren, childNo, left, rotate);

  return childNo <= maxChildren ? (
    <div className="TreeRectangle" style={{ ...style }}>
      <TreeRectangle
        size={size}
        maxChildren={maxChildren}
        childNo={childNo + 1}
        left={true}
        rotate={rotate}
      />
      <TreeRectangle
        size={size}
        maxChildren={maxChildren}
        childNo={childNo + 1}
        left={false}
        rotate={rotate}
      />
    </div>
  ) : null;
}
