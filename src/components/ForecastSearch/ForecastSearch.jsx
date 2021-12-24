import React from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import SearchInput from "../SearchInput/SearchInput";
import "./ForecastSearch.css";
import { ReactComponent as SunnyIcon } from "../../icons/sunny.svg";

function ForecastSearch({
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
}) {
  return (
    <div className="ForecastSearch">
      <div className="ForecastSearch-Icon">
        <SunnyIcon className="ForecastSearch-Icon-icon" />
      </div>
      <CountrySelect
        className="ForecastSearch-CountrySelectContainer"
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <SearchInput
        className="ForecastSearch-searchInputContainer"
        value={selectedCity}
        onChange={setSelectedCity}
      />
    </div>
  );
}

export default ForecastSearch;
