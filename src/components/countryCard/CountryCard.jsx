import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImage,
  CardData,
  Data,
  Value,
  Key,
} from './countryCard.styles';

const CountryCard = ({
  name, flag, region, population, capital,
}) => (
  <Card>
    <CardHeader>
      <CardImage src={flag} alt="country-image" />
    </CardHeader>
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardData>
        <Data>
          <Key>Population:</Key>
          <Value>{population}</Value>
        </Data>
        <Data>
          <Key>Region:</Key>
          <Value>{region}</Value>
        </Data>
        <Data>
          <Key>Capital:</Key>
          <Value>{capital}</Value>
        </Data>
      </CardData>
    </CardBody>
  </Card>
);

export default CountryCard;
