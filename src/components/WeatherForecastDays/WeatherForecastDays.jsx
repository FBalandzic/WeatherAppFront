import React from "react";
import { kelvinToCelsius } from "../utils/temperature";
import "./WeatherForecastDays.css";

const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function WeatherForecastDays(props) {
  const currentDay = new Date().getDay();

  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(daysInWeek[(currentDay + i) % 7]);
  }

  return (
    <div className="WeatherForecastDays">
      <div className="WeatherForecastDays-list">
        {days.map((day, index) => (
          <div key={index} className="WeatherForecastDays-list-item">
            <span className="WeatherForecastDays-list-item-day">{day}</span>
            <span className="WeatherForecastDays-list-item-temp">
              {Math.round(kelvinToCelsius(props.days[index].temp.day))}
              <sup style={{ fontSize: "10px" }}>°C</sup>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecastDays;
