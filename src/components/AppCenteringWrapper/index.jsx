import React from "react";
import { mapRange } from "../utils/math";
import "./AppCenteringWrapper.css";

const calculateBackgroundPositionPercent = (averageTemp) => {
  if (averageTemp === undefined) {
    return 50;
  } else {
    return mapRange(averageTemp, -40, 40, 0, 100);
  }
};

function AppCenteringWrapper({ children, averageTemp }) {
  const backgroundPositionPercent =
    calculateBackgroundPositionPercent(averageTemp);

  return (
    <div
      className="AppCenteringWrapper"
      style={{ backgroundPosition: `${backgroundPositionPercent}%` }}
    >
      <div>{children}</div>
    </div>
  );
}

export default AppCenteringWrapper;
