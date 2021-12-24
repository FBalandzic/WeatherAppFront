import React, { useState } from "react";
import { kelvinToCelsius } from "../utils/temperature";
import "./TemperatureComponent.css";

function TemperatueComponent(props) {
  return (
    <div className="TemperatueComponent">
      <h1 className="TemperatueComponent-temperature">
        {props.averageTemp}
        <sup className="TemperatueComponent-temperature-C">°C</sup>
      </h1>
    </div>
  );
}

export default TemperatueComponent;
