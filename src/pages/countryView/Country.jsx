import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useStore } from 'context/context';
import getCountryByName from 'lib/getCountryByName';
import CountryScreen from 'components/countryScreen/CountryScreen';
import LinkButton from 'components/button/Button';
import Loader from 'components/loader/Loader';
import ErrorView from 'components/errorView/ErrorView';

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
      {loading && <Loader />}
      {!loading && countryFiltered && (
        <CountryScreen country={countryFiltered} />
      )}
      {!countryFiltered && !loading && (
        <ErrorView
          title="Search Error"
          description={`The country with name "${country}" was not found :(`}
        />
      )}
    </Container>
  );
};

export default Country;
