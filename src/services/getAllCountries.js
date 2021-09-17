import { ALL_COUNTRIES, BASE_URL } from 'config/api';

function getAllCountries() {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + ALL_COUNTRIES)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}

export default getAllCountries;
