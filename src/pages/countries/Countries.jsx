import React from 'react';

import useFetch from 'hooks/useFetch';
import CountryCard from 'components/countryCard/CountryCard';

import Container from './countries.styles';

const Countries = () => {
  const url = 'https://restcountries.eu/rest/v2/all';
  const values = useFetch(url);

  const { loading, data } = values;

  return (
    <Container>
      {loading ? <h1>Hello, World!</h1> : (
        <CountryCard country={data[0]} />
      )}
    </Container>
  );
};

export default Countries;
