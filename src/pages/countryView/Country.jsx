import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useStore } from 'context/context';
import getCountryByName from 'lib/getCountryByName';
import LinkButton from 'components/button/Button';

import { Container } from './country.styles';

const Country = () => {
  const { country } = useParams();
  const { loading, countries } = useStore();

  const countryFiltered = useMemo(() => getCountryByName(countries, country), [country]);

  const { name } = countryFiltered;

  return (
    <div>
      <Container>
        <LinkButton to="/countrys" icon="west">Back</LinkButton>
        <h1>{name}</h1>
      </Container>
    </div>
  );
};

export default Country;
