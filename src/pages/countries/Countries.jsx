import React, { useMemo } from 'react';
import QueryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { useStore } from 'context/context';
import CountryList from 'components/countryList/CountryList';
import Loader from 'components/loader/Loader';
import Searcher from 'layout/searcher/Searcher';
import getCountriesByName from 'lib/getCountriesByName';

import Container from './countries.styles';

const Countries = () => {
  const { loading, countries } = useStore();
  const location = useLocation();
  const { query = '' } = useMemo(() => QueryString.parse(location.search), [location]);

  const data = useMemo(() => {
    if (!query) {
      return countries.filter(({ continent }) => continent === 'Europe');
    }

    const countriesFiltered = getCountriesByName(countries, query);

    return countriesFiltered;
  }, [countries, query]);

  return (
    <Container>
      <Searcher />
      {loading ? <Loader /> : <CountryList countries={data} />}
    </Container>
  );
};

export default Countries;
