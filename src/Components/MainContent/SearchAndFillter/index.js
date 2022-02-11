import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import "./searchAndFilter.scss";
function SearchAndFiltler(props) {
  return (
    <div className="search-filter">
      <Search />
      <Filter />
    </div>
  );
}

export default SearchAndFiltler;
