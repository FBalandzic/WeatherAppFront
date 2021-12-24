import React from "react";
import ReactSelect from "react-select";
import { countries } from "../utils/countries";
import "./CountrySelect.css";
import Flags from "country-flag-icons/react/3x2";

function CountrySelect({ selectedCountry, setSelectedCountry }) {
  const options = countries.map((country) => ({
    label: country,
    value: country,
  }));

  const handleOnChange = (option) => {
    setSelectedCountry(option.value);
  };

  const value =
    options.find((option) => option.value === selectedCountry) ?? null;

  const renderLabel = ({ value }) => {
    const Flag = Flags[value];
    return (
      <div className="CountrySelect-option">
        <div className="CountrySelect-flag">
          <Flag />
        </div>
        {value}
      </div>
    );
  };

  return (
    <div className="CountrySelect">
      <ReactSelect
        value={value}
        options={options}
        onChange={handleOnChange}
        isClearable={false}
        isSearchable={false}
        getOptionValue={renderLabel}
        getOptionLabel={renderLabel}
        styles={{
          control: (base) => ({
            ...base,
            border: "2px solid whitesmoke",
            borderRadius: "15px",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "10px 0 10px 4px",
          }),
        }}
        components={{
          IndicatorSeparator: null,
        }}
      />
    </div>
  );
}

export default CountrySelect;
