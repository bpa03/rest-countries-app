import React from 'react';

import Input from 'components/input/Input';
import Select from 'components/select/Select';

import Form from './searcher.styles';

const Searcher = ({ values, setValues }) => {
  const { query, options, region } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues(({
      ...values,
      [e.target.name]: e.target.value,
    }));
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
        initialValue={region}
        name="region"
        handleChange={handleChange}
      />
    </Form>
  );
};

export default Searcher;
