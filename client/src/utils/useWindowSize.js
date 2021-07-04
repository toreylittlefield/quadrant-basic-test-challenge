/* eslint-disable no-undef */
// from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm

import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function getArrayCells() {
    return Array(Math.ceil(Math.max(window.innerHeight, 900) / 50) - 2).fill(0);
  }

  const [navRowsArray, setNavRowsArray] = React.useState([getArrayCells]);

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    setNavRowsArray(getArrayCells);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return { windowSize, navRowsArray };
}
