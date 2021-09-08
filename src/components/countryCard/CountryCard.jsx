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
} from './countryCard.styles';

const CountryCard = ({
  country: {
    name, flag, region, population, capital,
  },
}) => (
  <Card>
    <CardHeader>
      <CardImage src={flag} alt="country-image" />
    </CardHeader>
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardData>
        <Data>
          Population:
          <Value>
            {population.toLocaleString()}
          </Value>
        </Data>
        <Data>
          Region:
          <Value>
            {region}
          </Value>
        </Data>
        <Data>
          Capital:
          <Value>
            {capital}
          </Value>
        </Data>
      </CardData>
    </CardBody>
  </Card>
);

export default CountryCard;
