import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../App";
function CountryInfo(props) {
  const themeContext = useContext(ThemeContext);
  const country = useSelector((state) => state.countries.country);
  const getLanguages = (country) => {
    let result = "";
    country.languages.forEach((language) => {
      if (result !== "") result = result + "-" + language.name;
      else result += language.name;
    });
    return result;
  };
  const getCountryNameByCode = async (code) => {
    const result = await axios.get(
      `https://restcountries.com/v2/alpha?codes=${code}`
    );
    return result.data;
  };
  const [contiresBorder, setContriesBoder] = useState([]);

  useEffect(() => {
    if (country && country.borders) {
      getCountryNameByCode(country.borders)
        .then((res) => {
          const countryName = res.map((country) => country.name);
          setContriesBoder(countryName);
        })
        .catch((err) => console.log(err));
    }
  }, [country]);
  console.log(contiresBorder);
  return (
    <div className="col l-6 m-6">
      <ScrollBar style={{ maxHeight: '80vh', overflow: 'hidden' }}>
        <div className="countryInfo">
          {country && (
            <>
              <h3 className="countryInfo_name">{country.name}</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="countryInfo__title">Native Name</td>
                    <td>:</td>
                    <td className="countryInfo__value">{country.nativeName}</td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Offical</td>
                    <td>:</td>
                    <td className="countryInfo__value">
                      {country.altSpellings[0]}
                    </td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Population</td>
                    <td>:</td>
                    <td className="countryInfo__value">
                      {new Intl.NumberFormat().format(country.population)}
                    </td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Region</td>
                    <td>:</td>
                    <td className="countryInfo__value">{country.region}</td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Sub Region</td>
                    <td>:</td>
                    <td className="countryInfo__value">{country.subregion}</td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Capital</td>
                    <td>:</td>
                    <td className="countryInfo__value">{country.capital}</td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Top Level Domain</td>
                    <td>:</td>
                    <td className="countryInfo__value">
                      {country.topLevelDomain}
                    </td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Currencies</td>
                    <td>:</td>
                    <td className="countryInfo__value">
                      {`${country.currencies[0].code}-${country.currencies[0].name} `}
                    </td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Language</td>
                    <td>:</td>
                    <td className="countryInfo__value">
                      {getLanguages(country)}
                    </td>
                  </tr>
                  <tr>
                    <td className="countryInfo__title">Border Contries</td>
                    <td>:</td>
                    <td className="countryInfo__value">
                      {contiresBorder.length > 0 &&
                        contiresBorder.map((contiresBorder) => (
                          <Link to={`/country/${contiresBorder}`}>
                            {" "}
                            <div
                              key={contiresBorder}
                              className={`borderItem ${themeContext.valueTheme.theme}`}
                            >
                              {contiresBorder}
                            </div>
                          </Link>
                        ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </ScrollBar>
    </div>
  );
}

export default CountryInfo;
