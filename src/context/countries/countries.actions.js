import countriesTypes from './countries.types';

export function gettingCountries() {
  return {
    type: countriesTypes.GETTING_COUNTRIES,
  };
}

export function setCountries(countries) {
  return {
    type: countriesTypes.SET_COUNTRIES,
    payload: countries,
  };
}
