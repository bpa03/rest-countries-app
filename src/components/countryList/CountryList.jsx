import React from 'react';

import CountryCard from 'components/countryCard/CountryCard';

import { ListContainer, List } from './countryList.styles';

const CountryList = ({ countries }) => (
  <ListContainer>
    <List>
      {countries.map(({
        name, flag, region, capital, population,
      }) => {
        // Formatted properties
        const formattedPopulation = population.toLocaleString();

        return (
          <CountryCard
            name={name}
            flag={flag}
            region={region}
            capital={capital}
            population={formattedPopulation}
          />
        );
      })}
    </List>
  </ListContainer>
);

export default CountryList;
