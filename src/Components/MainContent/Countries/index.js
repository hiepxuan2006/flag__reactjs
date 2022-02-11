import React, { useEffect } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountries, getCountriesByName, getCountryByRegion } from '../../Store/Actions/countriesAction';
import Country from "./Country";
import Loading from '../../Loading/Loading'


function Countries(props) {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.countries)
  const loading = useSelector(state => state.countries.loading)
  const slug = useParams()

  useEffect(() => {
    if (slug.regionName) dispatch(getCountryByRegion(slug.regionName))
    else if (slug.name) dispatch(getCountriesByName(slug.name))
    else
      dispatch(getCountries())
  }, [dispatch, slug.regionName, slug.name])
  return (
    <>
      {
        loading ? <Loading /> :
          (<ScrollBar style={{ maxHeight: '70vh', overflow: 'hidden' }}>
            <div className="row">
              {
                countries.map((country, index) => (
                  <Country country={country} key={index} />
                ))
              }
            </div>
          </ScrollBar>)
      }
    </>


  );
}

export default Countries;
