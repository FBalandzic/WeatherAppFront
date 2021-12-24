import React from "react";
import "./SearchInput.css";
import { FaSearch, } from "react-icons/fa";

const placeholderText = "Please enter your location...";

function SearchInput({ value, onChange }) {
  const handleOnChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="SearchInput">
      <input
        className="SearchInput-input"
        placeholder={placeholderText}
        value={value}
        onChange={handleOnChange}
      />
      <div className="SearchInput-icon">
        <FaSearch />
      </div>
    </div>
  );
}

export default SearchInput;
