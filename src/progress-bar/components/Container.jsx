import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const Container = () => {
  const [percent, setPercent] = React.useState(0);
  const [stop, setStop] = React.useState(false);
  useEffect(() => {
    if (percent < 100) {
      const interval = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) setStop(true);
          return (prev = prev + 1);
        });
      }, 100);
      return () => {
        clearInterval(interval);
      };
    }
  }, [stop]);

  return (
    <>
      <ProgressBar progress={percent} primary />
      <ProgressBar progress={70} success />
      <ProgressBar progress={20} warning />
      <ProgressBar progress={80} danger />
    </>
  );
};

export default Container;
