import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useStore } from 'context/context';
import getCountryByName from 'lib/getCountryByName';
import CountryScreen from 'components/countryScreen/CountryScreen';
import LinkButton from 'components/button/Button';

import { Container } from './country.styles';

const Country = () => {
  const { country } = useParams();
  const { loading, countries } = useStore();

  const countryFiltered = useMemo(
    () => getCountryByName(countries, country),
    [country, loading],
  );

  return (
    <Container>
      <LinkButton to="/countrys" icon="west">
        Back
      </LinkButton>
      {!loading && <CountryScreen country={countryFiltered} />}
    </Container>
  );
};

export default Country;
