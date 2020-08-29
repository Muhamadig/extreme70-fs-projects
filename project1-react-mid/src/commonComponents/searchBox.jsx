import React from "react";
import "./common.css";
const SearchBox = ({ name, id, placeholder, label }) => {
  //   let { name, id, placeholder, label } = props;
  return (
    <div>
      <label htmlFor="searchUser" className="search-label">
        {label}{" "}
      </label>
      <input
        type="search"
        name={name}
        id={id}
        placeholder={placeholder}
        className="searchBox"
      />
    </div>
  );
};

export default SearchBox;
