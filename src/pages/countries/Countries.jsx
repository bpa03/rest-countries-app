import React, { useMemo } from 'react';

import { useStore } from 'context/context';
import CountryList from 'components/countryList/CountryList';
import Loader from 'components/loader/Loader';
import Searcher from 'layout/searcher/Searcher';
import getCountriesByName from 'lib/getCountriesByName';
import useSearchQuery from 'hooks/useSearchQuery';

import Container from './countries.styles';

const Countries = () => {
  const { loading, countries } = useStore();
  const { query = '' } = useSearchQuery();

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
