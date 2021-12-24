import React, { useState, useEffect } from "react";
import ForecastSearch from "../ForecastSearch/ForecastSearch";
import DateComponent from "../CurrentDate/DateComponent";
import TemperatureComponent from "../TemperatureComponent/TemperatureComponent";
import WeatherForecastDays from "../WeatherForecastDays/WeatherForecastDays";
import { cities } from "../utils/cities";
import { arrayAverage } from "../utils/math";
import { kelvinToCelsius } from "../utils/temperature";

function Forecast({ setAverageTemp }) {
  const [isLoading, setIsLoading] = useState(false);
  const [dailyData, setDailyData] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("RS");

  const citiesInSelectedCountry = cities.filter(
    (city) => city.country === selectedCountry
  );
  const city = citiesInSelectedCountry.find(
    (city) => city.name.toLowerCase() === selectedCity.toLowerCase()
  );

  const averageTemp = dailyData
    ? Math.round(
        arrayAverage(dailyData.map((day) => kelvinToCelsius(day.temp.day)))
      )
    : undefined;

  React.useEffect(() => {
    setAverageTemp(averageTemp);
  }, [setAverageTemp, averageTemp]);

  useEffect(() => {
    if (!city) {
      setDailyData(undefined);
      return;
    }

    setIsLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly,minutely&appid=b750f7c660bdbb6780b9ebed809970f6`
    )
      .then((response) => {
        response.json().then((data) => {
          setDailyData(data.daily);
          console.log(data);
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  return (
    <div className="MainBack" className="SreachDiv">
      <ForecastSearch
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {dailyData && (
        <>
          <DateComponent />
          <TemperatureComponent averageTemp={averageTemp} />
          <WeatherForecastDays days={dailyData} />
        </>
      )}
    </div>
  );
}

export default Forecast;
