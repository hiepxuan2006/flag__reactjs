import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import Options from "./options";
function Filter(props) {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const { regionName } = useParams();
  const [valueOption, setValueOption] = useState('All')
  const handleSelect = (e) => {
    if (refSelect.current) setIsShow(refSelect.current.contains(e.target));
  };
  useEffect(() => {
    if (regionName) setValueOption(regionName)
    else setValueOption('All')
  }, [regionName])
  useEffect(() => {
    if (isShow) {
      document.addEventListener("click", handleSelect);
      return () => {
        document.removeEventListener("click", handleSelect);
      };
    }
  }, [isShow]);
  return (
    <div className="filter">
      <h3>Filter by regions</h3>
      <FilterOption className={themeContext.valueTheme.theme}>
        <div className="filter__heading" ref={refSelect} onClick={handleSelect}>
          <span>{valueOption}</span>
          <div>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <Options isShow={isShow} />
      </FilterOption>
    </div>
  );
}

export default Filter;
const FilterOption = styled.div`
  position: relative;
  border-radius: 5px;
  .filter__heading {
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--boxShadow);
    padding: 6px;
    user-select: none;
  }
`;
