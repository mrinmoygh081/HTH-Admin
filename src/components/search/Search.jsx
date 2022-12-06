import React from "react";

const Search = ({ searchedVal, setSearchedVal }) => {
  return (
    <>
      <div className="topnav__search">
        <input
          type="text"
          placeholder="Search PNR..."
          value={searchedVal}
          onChange={(e) => setSearchedVal(e.target.value)}
        />
        <i className="bx bx-search"></i>
      </div>
    </>
  );
};

export default Search;
