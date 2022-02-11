import React, { useContext, useEffect } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import { getCountryByname } from "../../Store/Actions/countriesAction";
import "./CountryDetail.scss";
import Loading from '../../Loading/Loading'
import CountryInfo from "./CountryInfo";
function CountryDetail(props) {
  const themeContext = useContext(ThemeContext);
  const slug = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(slug.countryName);
  const country = useSelector((state) => state.countries.country);
  const loading = useSelector((state) => state.countries.loading);
  useEffect(() => {
    dispatch(getCountryByname(slug.countryName))
  }, [slug.countryName, dispatch])
  return (
    <>
      {
        loading ? <Loading /> : (<div style={{ height: '70vh' }} className="grid wide">
          <CountryBack>
            <button onClick={() => navigate(-1)} className={themeContext.valueTheme.theme}>Go back</button>
          </CountryBack>
          <div className="row">
            <div className="col l-6 m-6 c-12">
              <CountryFlag className="flag">
                <img
                  src={country ? country.flag : 'error'}
                  alt=""
                />
              </CountryFlag>
            </div>
            <CountryInfo />
          </div>
        </div>)
      }
    </>


  );
}

export default CountryDetail;
const CountryFlag = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    box-shadow: var(--boxShadow);
  }
`;
const CountryBack = styled.div`
  button {
    padding: 4px 12px;
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 20px;
    filter: brightness(0.9);

    &:hover {
      filter: brightness(1);
      cursor: pointer;
      user-select: none;
      font-weight: bold;
    }
  }
`;
