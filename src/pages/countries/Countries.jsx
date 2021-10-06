import React, { useMemo } from 'react';

import { useStore } from 'context/context';
import CountryList from 'components/countryList/CountryList';
import Loader from 'components/loader/Loader';
import Searcher from 'layout/searcher/Searcher';
import getCountriesByName from 'lib/getCountriesByName';
import getCountriesByRegion from 'lib/getCountriesByRegion';

import Container from './countries.styles';

const Countries = () => {
  const {
    loading,
    countries,
    filters: { regionFilter, searchQuery },
  } = useStore();

  const data = useMemo(() => {
    let countriesFiltered;

    if (searchQuery !== '') {
      countriesFiltered = getCountriesByName(countries, searchQuery);
    }

    countriesFiltered = getCountriesByRegion(countriesFiltered || countries, regionFilter);

    return countriesFiltered;
  }, [countries, regionFilter, searchQuery]);

  return (
    <Container>
      <Searcher />
      {loading ? <Loader /> : <CountryList countries={data} />}
    </Container>
  );
};

export default Countries;
