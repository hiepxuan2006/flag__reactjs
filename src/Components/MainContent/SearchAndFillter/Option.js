import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Option({ region }) {
  const navigate = useNavigate();
  const handleValueOption = () => {
    if (region.value !== "All") navigate(`/region/${region.value}`);
    else navigate(`/`);
  };
  return (
    <FilterItem onClick={handleValueOption}>
      <i className={region.icon}></i>
      <span>{region.value}</span>
    </FilterItem>
  );
}

export default Option;
const FilterItem = styled.li`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;
  &:hover {
    font-weight: bold;
    background-color: var(--selectOptionBackground);
  }
`;
