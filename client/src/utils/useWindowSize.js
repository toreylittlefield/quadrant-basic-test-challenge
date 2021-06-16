/* eslint-disable no-undef */
// from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm

import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });
  const [navRowsArray, setNavRowsArray] = React.useState([0, 0, 0, 0]);

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setNavRowsArray(Array(Math.ceil(window.innerHeight / 50) - 2).fill(0));
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return { windowSize, navRowsArray };
}
