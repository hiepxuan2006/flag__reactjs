import {
    GET_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRIES_BY_REGION,
    GET_COUNTRIES_BY_NAME,
    SET_LOADING,
}
    from '../types';
const initialSate = {
    countries: [],
    country: null,
    loading: true,
}
const countriesReducer = (state = initialSate, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_COUNTRIES:
            return { ...state, countries: payload };
        case GET_COUNTRY_BY_NAME:
            return { ...state, country: payload }
        case GET_COUNTRIES_BY_REGION:
            return { ...state, countries: payload }
        case GET_COUNTRIES_BY_NAME:
            return { ...state, countries: payload }
        case SET_LOADING:
            return { ...state, loading: payload }
        default:
            return state
    }
}
export default countriesReducer;