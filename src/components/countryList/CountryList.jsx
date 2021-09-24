import React from 'react';

import CountryCard from 'components/countryCard/CountryCard';

import { ListContainer, List } from './countryList.styles';

const CountryList = ({ countries }) => (
  <ListContainer>
    <List>
      {countries.map(({
        name, flags, region, capital, population, numericCode,
      }) => {
        // Formatted properties
        const formattedPopulation = population.toLocaleString();
        const svgFlag = flags[0];

        return (
          <CountryCard
            name={name}
            flag={svgFlag}
            region={region}
            capital={capital}
            population={formattedPopulation}
            key={numericCode}
          />
        );
      })}
    </List>
  </ListContainer>
);

export default CountryList;
