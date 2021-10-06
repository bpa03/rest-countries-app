import countriesTypes from './countries.types';

export const gettingCountries = () => ({
  type: countriesTypes.GETTING_COUNTRIES,
});

export const setCountriesRegionFilter = (region) => ({
  type: countriesTypes.SET_COUNTRIES_REGION_FILTER,
  payload: region,
});

export const setSearchQuery = (query) => ({
  type: countriesTypes.SET_SEARCH_QUERY,
  payload: query,
});

export const setCountries = (countries) => ({
  type: countriesTypes.SET_COUNTRIES,
  payload: countries,
});
