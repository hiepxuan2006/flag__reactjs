import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../App';
import Option from './Option';
const RegionList = [
    { icon: 'fa-solid fa-globe', value: 'All' },
    { icon: 'fa-solid fa-earth-africa', value: 'Africa' },
    { icon: 'fa-solid fa-earth-americas', value: 'Americas' },
    { icon: 'fa-solid fa-earth-asia', value: 'Asia' },
    { icon: 'fa-solid fa-earth-europe', value: 'Europe' },
    { icon: 'fa-solid fa-earth-oceania', value: 'Oceania' },
]
function Options({ isShow }) {
    const themeContext = useContext(ThemeContext);
    const refList = useRef(null)
    useEffect(() => {
        const showOptions = () => {
            if (isShow) {
                refList.current.style.display = 'block'
            } else {
                refList.current.style.display = 'none'

            }
        };
        showOptions();
        document.addEventListener("resize", showOptions);
        return () => {
            document.removeEventListener("resize", showOptions);
        };
    }, [isShow]);

    return (
        <FilterList className={themeContext.valueTheme.theme} ref={refList}>
            {RegionList.map((region, index) => (
                <Option region={region} key={index} />
            ))}

        </FilterList>
    );
}

export default Options;
const FilterList = styled.ul`
  list-style: none;
  position: absolute;
  box-shadow: var(--boxShadow);
  display: none;
  border-radius: 5px;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  
`;