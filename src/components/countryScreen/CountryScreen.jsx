import React from 'react';

import DataView from 'components/dataView/DataView';
import formatMultipleStrings from 'lib/formatMultipleStrings';

import {
  CountryData,
  CountryFlag,
  CountryName,
  Wrapper,
} from './countryScreen.styles';

const CountryScreen = ({ country }) => {
  const {
    name, flag, nativeName, region, subregion, capital,
  } = country;

  const population = country.population.toLocaleString();
  const topLevelDomain = country.topLevelDomain[0];
  const currencies = formatMultipleStrings(country.currencies);
  const languages = formatMultipleStrings(country.languages);

  return (
    <Wrapper>
      <CountryFlag>
        <img src={flag} alt="country_flag.svg" />
      </CountryFlag>
      <CountryName>{name}</CountryName>
      <CountryData>
        <div>
          <DataView propertyKey="Native Name" value={nativeName} />
          <DataView propertyKey="Population" value={population} />
          <DataView propertyKey="Region" value={region} />
          <DataView propertyKey="Sub Region" value={subregion} />
          <DataView propertyKey="Capital" value={capital} />
        </div>
        <div>
          <DataView
            propertyKey="Top Level Domain"
            value={topLevelDomain}
          />
          <DataView propertyKey="Currencies" value={currencies} />
          <DataView propertyKey="Languages" value={languages} />
        </div>
      </CountryData>
    </Wrapper>
  );
};

export default CountryScreen;
