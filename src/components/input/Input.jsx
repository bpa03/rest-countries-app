import React from 'react';

import { InputBase, InputIcon, Group } from './input.styles';

const Input = ({
  inputType = '', placeholder = '', value, handleChange, name = '',
}) => (
  <Group>
    <InputIcon icon="search" />
    <InputBase
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
    />
  </Group>
);

export default Input;
