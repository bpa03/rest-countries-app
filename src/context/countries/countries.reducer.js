import countriesTypes from './countries.types';

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
    default:
      return state;
  }
}

export default countriesReducer;
