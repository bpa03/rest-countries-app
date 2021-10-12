import React, { useState } from 'react';

import { useDispatch, useStore } from 'context/context';
import { setCountriesRegionFilter, setSearchQuery } from 'context/countries/countries.actions';
import Input from 'components/input/Input';
import Select from 'components/select/Select';

import Form from './searcher.styles';

const Searcher = () => {
  const dispatch = useDispatch();
  const { filters: { searchQuery, regionFilter } } = useStore();
  const [values, setValues] = useState({
    query: searchQuery,
    options: [
      { value: 'Africa' },
      { value: 'Americas' },
      { value: 'Asia' },
      { value: 'Europe' },
      { value: 'Oceania' },
    ],
  });

  const { query, options } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues(({
      ...values,
      [e.target.name]: e.target.value,
    }));
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSelectChange = (e) => {
    dispatch(setCountriesRegionFilter(e.target.value));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        inputType="text"
        placeholder="Search for a country..."
        value={query}
        handleChange={handleChange}
        name="query"
      />
      <Select
        options={options}
        initialValue={regionFilter}
        name="region"
        handleChange={handleSelectChange}
      />
    </Form>
  );
};

export default Searcher;
