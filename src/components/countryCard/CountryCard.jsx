import React from 'react';

import DataView from 'components/dataView/DataView';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImage,
  CardData,
} from './countryCard.styles';

const CountryCard = ({
  name, flag, region, capital, population,
}) => (
  <Card>
    <CardHeader>
      <CardImage src={flag} alt="country-image" />
    </CardHeader>
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardData>
        <DataView propertyKey="Region" value={region} />
        <DataView propertyKey="Capital" value={capital} />
        <DataView propertyKey="Population" value={population} />
      </CardData>
    </CardBody>
  </Card>
);

export default CountryCard;
