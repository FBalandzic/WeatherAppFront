import React from "react";

import "./DateComponent.css";

const dateObj = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = dateObj.getDate();
const month = dateObj.getMonth();
const year = dateObj.getFullYear();

function DateComponent() {
  return (
    <div className="DateComponent">
      <span className="DateComponent-date">
        {monthNames[month].toUpperCase()} - {month + 1}/{date}/{year}
      </span>
    </div>
  );
}

export default DateComponent;
