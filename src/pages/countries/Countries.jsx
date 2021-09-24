import React, { useMemo } from 'react';

import { useStore } from 'context/context';
import CountryList from 'components/countryList/CountryList';
import Loader from 'components/loader/Loader';
import Searcher from 'layout/searcher/Searcher';

import Container from './countries.styles';

const Countries = () => {
  const values = useStore();
  const { loading, countries } = values;

  const data = useMemo(() => {
    if (countries.length) {
      return countries.filter((country) => country.continent === 'Europe');
    }

    return true;
  }, [countries]);

  return (
    <Container>
      <Searcher />
      {loading ? <Loader /> : <CountryList countries={data} />}
    </Container>
  );
};

export default Countries;
