import React, { useState, useMemo } from 'react';
import QueryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

import Input from 'components/input/Input';

import Form from './searcher.styles';

const Searcher = () => {
  const history = useHistory();
  const location = useLocation();
  const { q = '' } = useMemo(() => QueryString.parse(location.search), [location]);
  const [values, setValues] = useState({
    query: q,
    continent: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { query } = values;

    history.push(`?query=${query}`);
  };

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const { query } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        inputType="text"
        placeholder="Search for a country..."
        value={query}
        handleChange={handleChange}
        name="query"
      />
    </Form>
  );
};

export default Searcher;
