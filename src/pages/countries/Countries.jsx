import React, { useMemo, useState } from 'react';

import { useStore } from 'context/context';
import CountryList from 'components/countryList/CountryList';
import Loader from 'components/loader/Loader';
import Searcher from 'layout/searcher/Searcher';
import getCountriesByName from 'lib/getCountriesByName';
import getCountriesByRegion from 'lib/getCountriesByRegion';

import Container from './countries.styles';

const Countries = () => {
  const [values, setValues] = useState({
    query: '',
    region: 'Europe',
    options: [
      { value: 'Africa' },
      { value: 'Americas' },
      { value: 'Asia' },
      { value: 'Europe' },
      { value: 'Oceania' },
    ],
  });

  const { query, region } = values;

  const {
    loading,
    countries,
  } = useStore();

  const data = useMemo(() => {
    let countriesFiltered;

    if (query !== '') {
      countriesFiltered = getCountriesByName(countries, query);
    }

    countriesFiltered = getCountriesByRegion(countriesFiltered || countries, region);

    return countriesFiltered;
  }, [countries, query, region]);

  return (
    <Container>
      <Searcher values={values} setValues={setValues} />
      {loading ? <Loader /> : <CountryList countries={data} />}
    </Container>
  );
};

export default Countries;
