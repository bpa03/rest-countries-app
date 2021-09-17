import React from 'react';

import Input from 'components/input/Input';

import Form from './searcher.styles';

const Searcher = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input inputType="text" placeholder="Search for a country..." />
    </Form>
  );
};

export default Searcher;
