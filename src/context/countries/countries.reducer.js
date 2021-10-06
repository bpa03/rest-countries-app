import countriesTypes from './countries.types';

import { replaceRegionFilter, replaceSearchQuery } from './countries.utils';

function countriesReducer(state, action) {
  switch (action.type) {
    case countriesTypes.GETTING_COUNTRIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case countriesTypes.SET_COUNTRIES: {
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    }
    case countriesTypes.SET_COUNTRIES_REGION_FILTER: {
      return {
        ...state,
        filters: replaceRegionFilter(state.filters, action.payload),
      };
    }
    case countriesTypes.SET_SEARCH_QUERY: {
      return {
        ...state,
        filters: replaceSearchQuery(state.filters, action.payload),
      };
    }
    default:
      return state;
  }
}

export default countriesReducer;
