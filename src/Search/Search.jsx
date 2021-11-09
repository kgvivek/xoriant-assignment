import React from "react";
import "./Search.css";

const Search = ({ placeholder, onChange, searchTerm }) => {
  const handleChange = (event) => {
    if (onChange) onChange(event?.target.value);
  };

  return (
    <input
      className="search"
      type="search"
      name="search"
      onChange={(event) => handleChange(event)}
      placeholder={placeholder}
      value={searchTerm}
    />
  );
};

export default Search;
