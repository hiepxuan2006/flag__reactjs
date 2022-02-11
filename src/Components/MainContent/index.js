import React from "react";
import Countries from "./Countries";
import SearchAndFiltler from "./SearchAndFillter";

function MainContent(props) {
  return (
    <div className="container grid wide">
      <SearchAndFiltler />
      <Countries />
    </div>
  );
}

export default MainContent;
