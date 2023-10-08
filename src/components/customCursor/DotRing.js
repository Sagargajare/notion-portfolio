import useMousePosition from "./useMousePosition";
import React, { useContext } from "react";

import { MouseContext } from "./mouse-context";

const DotRing = () => {
    // 1.
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;