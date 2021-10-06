import React from 'react';

import { useDispatch } from 'context/context';
import { setCountriesRegionFilter, setSearchQuery } from 'context/countries/countries.actions';
import Input from 'components/input/Input';
import Select from 'components/select/Select';
import useForm from 'hooks/useForm';

import Form from './searcher.styles';

const Searcher = () => {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    query: '',
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

    dispatch(setSearchQuery(query));
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
        placeholder="Filter By Continent"
        name="region"
        handleChange={handleSelectChange}
      />
    </Form>
  );
};

export default Searcher;
