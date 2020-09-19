import React from "react";
import "./common.css";
const SearchBox = ({ name, id, placeholder, label, onChange }) => {
  //   let { name, id, placeholder, label } = props;
  return (
    <div>
      <label htmlFor="searchUser" className="search-label">
        {label}
      </label>
      <input
        type="search"
        name={name}
        id={id}
        placeholder={placeholder}
        className="searchBox"
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

export default SearchBox;
