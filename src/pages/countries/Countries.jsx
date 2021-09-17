import React, { useMemo } from 'react';

import useFetch from 'hooks/useFetch';
import CountryList from 'components/countryList/CountryList';
import Loader from 'components/loader/Loader';
import Searcher from 'layout/searcher/Searcher';

import Container from './countries.styles';

const Countries = () => {
  const url = 'https://restcountries.eu/rest/v2/all';
  const values = useFetch(url);

  const { loading, data } = values;

  const countries = useMemo(() => {
    if (data.length) {
      return data.filter((country) => country.region === 'Europe');
    }

    return true;
  }, [data]);

  return (
    <Container>
      <Searcher />
      {loading ? <Loader /> : <CountryList countries={countries} />}
    </Container>
  );
};

export default Countries;
