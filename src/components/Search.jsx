import React from 'react';
const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
