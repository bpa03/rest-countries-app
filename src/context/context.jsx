import React, {
  createContext, useReducer, useContext, useEffect,
} from 'react';

import getAllCountries from 'services/getAllCountries';
import countriesReducer from './countries/countries.reducer';
import { gettingCountries, setCountries } from './countries/countries.actions';

const CountriesContext = createContext(null);

const INITIAL_STATE = {
  loading: true,
  countries: [],
  filters: {
    searchQuery: '',
    regionFilter: 'Europe',
  },
};

export default function CountriesProvider({ children }) {
  const [state, dispatch] = useReducer(countriesReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch(gettingCountries());

    getAllCountries().then((data) => {
      dispatch(setCountries(data));
    });
  }, []);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountriesContext() {
  const context = useContext(CountriesContext);

  if (!context) {
    throw new Error(
      'useCountriesContext must be used within a CountriesProvider',
    );
  }

  return context;
}

export function useDispatch() {
  const store = useCountriesContext();
  const { dispatch } = store;

  return dispatch;
}

export function useStore(callback) {
  const store = useCountriesContext();
  const { state } = store;

  return callback instanceof Function ? callback(state) : state;
}
